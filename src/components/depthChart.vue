<script lang="ts">
const defaultOptions: IDepthItemPropsOptions = {
  width: 500, // 总宽
  height: 340, // 总高
  marginX: 50, // 右侧数量宽度
  marginY: 20, // 底部价格高度
  fontSize: 12, // // 坐标轴字体大小
  fontColor: '#909198', // 坐标轴字体颜色
  bidsColor: '#0BC688', // 买盘颜色
  asksColor: '#F14B4B', // 卖盘颜色
  bidsBgColor: 'rgba(11,198,136,0.2)', // 买盘背景颜色
  asksBgColor: 'rgba(241,75,75,0.2)', // 卖盘背景颜色
  dottedBgColor: 'rgba(91,89,89,0.02)', // 虚线背景色
  axisColor: '#5B5959', // 中线及刻度线颜色
  axisXBgColor: '#F7F7F7', // X坐标轴背景色
  axisYBgColor: '#F7F7F7', // Y坐标轴背景色
  axisXBorderColor: '#F7F7F7', // X坐标轴边框色
  axisYBorderColor: '#F7F7F7', // Y坐标轴边框色
  axisLineWidth: 4, // 刻度线宽度
  tipFontSize: 14, // 提示字体大小
  tipColor: '#FFFFFF', // 飘窗字体颜色
  tipPriceText: '价格',
  tipTotalText: '总额',
  wheel: 50, // 默认鼠标滚轮步长，数值越大，展示的数据量越多
  isRedUp: false, // 默认false红跌绿涨，true红涨绿跌
}
const defaultSymbolData: {
  currentPrice: number | string
  priceScale: number | string
  qtyScale: number | string
} = {
  currentPrice: 0, // 当前价格
  priceScale: 2, // 价格精度
  qtyScale: 2, // 数量精度
}
const defaultDepthData: {
  bids: IDepthItem[]
  asks: IDepthItem[]
} = {
  bids: [],
  asks: [],
}
</script>
<script setup lang="ts">
import {
  ref,
  onMounted,
  computed,
  defineProps,
  getCurrentInstance,
  type ComponentInternalInstance,
} from 'vue'
import VueKonva from 'vue-konva'
import { throttle, times, plus, minus, div, toFormat } from '@/utils'

const { appContext } = <ComponentInternalInstance>getCurrentInstance()
appContext.app.use(VueKonva, {
  prefix: 'kv',
})
defineOptions({
  name: 'depthChart',
})

const props = defineProps({
  options: {
    type: Object,
    default: () => defaultOptions,
  },
  // 交易对数据
  symbolData: {
    type: Object,
    default: () => defaultSymbolData,
  },
  depthData: {
    type: Object,
    default: () => defaultDepthData,
  },
})

const options = computed(() => {
  const conf = {
    ...defaultOptions,
    ...props.options,
  }
  if (conf.isRedUp) {
    ;[conf.bidsColor, conf.asksColor] = [conf.asksColor, conf.bidsColor]
    ;[conf.bidsBgColor, conf.asksBgColor] = [conf.asksBgColor, conf.bidsBgColor]
  }
  return conf
})

const width = ref(options.value.width || 500) // 总宽
const height = ref(options.value.height || 340) // 总高
const viewWidth = ref(minus(width.value, options.value.marginX).toNumber())
const viewHalfWidth = ref(viewWidth.value / 2)
const viewHeight = ref(minus(height.value, options.value.marginX).toNumber())
const wheel = ref(options.value.wheel || 50)

// 买单-价格倒序
const bids = computed(() => {
  const list = props.depthData.bids || []
  return list
    .map((a: any) => {
      if (Array.isArray(a)) {
        return {
          ...a,
          price: a[0],
          totalAmount: a[1],
        }
      }
      return a
    })
    .filter((a: any) => a.price < props.symbolData.currentPrice)
    .slice(0, wheel.value)
})
// 卖单-价格倒序
const asks = computed(() => {
  const list = props.depthData.asks || []
  return list
    .map((a: any) => {
      if (Array.isArray(a)) {
        return {
          ...a,
          price: a[0],
          totalAmount: a[1],
        }
      }
      return a
    })
    .filter((a: any) => a.price > props.symbolData.currentPrice)
    .slice(-wheel.value)
})
const minLength = 10
const maxLength = computed(() => {
  const bidsLen = props.depthData.bids.length
  const asksLen = props.depthData.asks.length
  return Math.max(bidsLen, asksLen, minLength)
})

const mouseX = ref(0)

const xScales = computed(() => {
  const middlePrice = props.symbolData.currentPrice
  const bidsScaleSpread = bids.value.length
    ? minus(middlePrice, bids.value[bids.value.length - 1].price)
        .dividedBy(3)
        .toNumber()
    : 0
  const bidsScales =
    +bidsScaleSpread > 0
      ? [minus(middlePrice, times(bidsScaleSpread, 2)), minus(middlePrice, bidsScaleSpread)]
      : [0, 0]
  const asksScaleSpread = asks.value.length
    ? minus(asks.value[0].price, middlePrice).dividedBy(3).toNumber()
    : 0

  const asksScales =
    +asksScaleSpread > 0
      ? [
          plus(middlePrice, asksScaleSpread).toNumber(),
          plus(middlePrice, times(asksScaleSpread, 2)).toNumber(),
        ]
      : [0, 0]
  return [...bidsScales, middlePrice, ...asksScales].map((v) =>
    toFormat(v, props.symbolData.priceScale),
  )
})

const maxY = computed(() =>
  Math.max(bids.value[bids.value.length - 1]?.totalAmount || 0, asks.value[0]?.totalAmount || 0),
)

const yScales = computed(() => {
  const count = viewHeight.value > 800 ? 20 : 10
  const total = plus(maxY.value, maxY.value % 10).toNumber()
  const scaleTotal = div(total, count)

  return Array.from(new Array(count))
    .map((p, i) => {
      const currentScaleTotal = scaleTotal.multipliedBy(i).toFormat(props.symbolData.qtyScale)
      const scaleHeight = div(viewHeight.value, count).multipliedBy(i)

      const y = minus(viewHeight.value, scaleHeight).toFixed(2)
      return {
        currentScaleTotal,
        y,
      }
    })
    .filter((a) => +a.currentScaleTotal > 0)
})

const bidsGroup = computed(() => {
  if (!bids.value.length || !maxY.value) return null
  const chartHeight = viewHeight.value - options.value.marginY
  const middlePrice = props.symbolData.currentPrice
  const repo = minus(middlePrice, bids.value[bids.value.length - 1].price)
  let path = ''
  const data = [...bids.value].reverse().map((p: IDepthItem, i: number) => {
    const x = +minus(p.price, middlePrice)
      .dividedBy(repo)
      .multipliedBy(viewHalfWidth.value)
      .plus(viewHalfWidth.value)
      .toFixed(props.symbolData.priceScale)

    const y = Math.max(
      +minus(maxY.value, p.totalAmount)
        .dividedBy(maxY.value)
        .multipliedBy(chartHeight)
        .toFixed(props.symbolData.qtyScale + 1),
      options.value.marginY,
    )

    if (i === 0) {
      path += `M-1 ${viewHeight.value} V${y} `
    } else if (i === bids.value.length - 1) {
      path += `H${x} V${y} V${viewHeight.value}`
    } else {
      path += `H${x} V${y} `
    }

    return { ...p, x, y }
  })
  return {
    data,
    path,
  }
})
const asksGroup = computed(() => {
  if (!asks.value.length || !maxY.value) return null
  const chartHeight = viewHeight.value - options.value.marginY
  const middlePrice = props.symbolData.currentPrice
  const repo = minus(asks.value[0].price, middlePrice)
  let path = ''
  const data = asks.value.map((p: IDepthItem, i: number) => {
    const x = +minus(p.price, middlePrice)
      .dividedBy(repo)
      .multipliedBy(viewHalfWidth.value)
      .plus(viewHalfWidth.value)
      .toFixed(props.symbolData.priceScale)

    const y = Math.max(
      +minus(maxY.value, p.totalAmount)
        .dividedBy(maxY.value)
        .multipliedBy(chartHeight)
        .toFixed(props.symbolData.qtyScale + 1),
      options.value.marginY,
    )

    if (i === 0) {
      path += `M${viewWidth.value} ${viewHeight.value} V${y} `
    } else if (i === asks.value.length - 1) {
      path += `H${x} V${y} V${viewHeight.value}`
    } else {
      path += `H${x} V${y} `
    }

    return { ...p, x, y }
  })

  return {
    data,
    path,
  }
})

const mousePath = computed(() => {
  const mouse_x = mouseX.value
  if (!mouseX) return
  if (mouse_x > viewWidth.value) return
  let value

  if (mouse_x < viewHalfWidth.value) {
    const bidList = bidsGroup.value?.data?.slice()?.reverse() || []
    if (!bidList.length) return
    for (let i = 0; i < bidList.length; i++) {
      const pre = bidList[i]
      if (mouse_x > +pre.x) {
        value = pre
        break
      }
    }
  } else {
    const askList = asksGroup.value?.data?.slice()?.reverse() || []
    if (!askList.length) return
    for (let i = 0; i < askList.length; i++) {
      const pre = askList[i]
      if (mouse_x < +pre.x) {
        value = pre
        break
      }
    }
  }

  return value
})

const overlayEl = ref()

const touchGap = ref<number>(0)

const depthChartEl = ref()
const getClientSize = () => {
  if (!depthChartEl.value) return
  width.value = depthChartEl.value.clientWidth
  height.value = depthChartEl.value.clientHeight || height.value
  viewWidth.value = minus(width.value, options.value.marginX).toNumber()
  viewHalfWidth.value = viewWidth.value / 2
  viewHeight.value = minus(height.value, options.value.marginY).toNumber()
  window.addEventListener('resize', getClientSize)
}
onMounted(() => {
  getClientSize()
})

const onMouseMove = throttle((e: any) => {
  e.evt.preventDefault()
  mouseX.value = e.evt.offsetX
}, 300)
</script>
<template>
  <div class="depth-chart" ref="depthChartEl">
    <kv-stage
      :config="{ width, height }"
      @wheel="
        (e: any) => {
          e.evt.preventDefault()
          if (e.evt.wheelDelta < 0) {
            wheel = Math.min(wheel + 2, maxLength)
          } else {
            wheel = Math.max(wheel - 2, minLength)
          }
        }
      "
      @mousemove="onMouseMove"
      @mouseleave="() => (mouseX = 0)"
      @touchmove="
        (e: any) => {
          e.evt.preventDefault()
          if (e.evt.targetTouches.length > 1) {
            if (touchGap) {
              if (
                Math.abs(e.evt.targetTouches[0].pageX - e.evt.targetTouches[1].pageX) < touchGap
              ) {
                wheel = Math.min(wheel + 2, maxLength)
              } else {
                wheel = Math.max(wheel - 2, minLength)
              }
            }
            touchGap = Math.abs(e.evt.targetTouches[0].pageX - e.evt.targetTouches[1].pageX)
          } else {
            !touchGap && (mouseX = e.evt.changedTouches[0].pageX)
          }
        }
      "
      @touchend="
        (e: any) => {
          e.evt.preventDefault()
          mouseX = 0
          touchGap = 0
        }
      "
    >
      <kv-layer>
        <kv-path
          :fill="options.bidsBgColor"
          :stroke="options.bidsColor"
          :strokeWidth="1"
          :data="bidsGroup?.path"
        />
        <kv-path
          :fill="options.asksBgColor"
          :stroke="options.asksColor"
          :strokeWidth="1"
          :data="asksGroup?.path"
        />
        <!-- 中线 -->
        <kv-path
          :stroke="options.axisColor"
          :strokeWidth="1"
          :data="`M${viewHalfWidth} 0 L${viewHalfWidth} ${viewHeight} Z`"
        />

        <kv-group v-if="mousePath">
          <!-- 水平-虚线 -->
          <kv-path
            :data="
              +mousePath.x < viewHalfWidth
                ? `M0 ${mousePath?.y} L${viewHalfWidth} ${mousePath?.y} Z`
                : `M${viewHalfWidth} ${mousePath?.y} L${viewWidth} ${mousePath?.y} Z`
            "
            :stroke="+mousePath.x < viewHalfWidth ? options.bidsColor : options.asksColor"
            :strokeWidth="0.5"
            :dash="[2, 4]"
          />
          <!-- 垂直-虚线 -->
          <kv-path
            :data="
              +mousePath.x < viewHalfWidth
                ? `M-1 -1 L-1 ${height} L${mousePath?.x} ${height} L${mousePath?.x} -1 Z`
                : `M${viewWidth + 1} -1 L${mousePath?.x} -1 L${mousePath?.x} ${height} L${viewWidth + 1} ${height} Z`
            "
            :stroke="+mousePath.x < viewHalfWidth ? options.bidsColor : options.asksColor"
            :fill="options.dottedBgColor"
            :strokeWidth="0.5"
            :dash="[2, 4]"
          />

          <!-- 悬停弹框 -->
          <kv-Rect
            :width="(overlayEl?.getNode()?.textWidth || 0) + 40"
            :height="(overlayEl?.getNode()?.textHeight || 0) * 4.3"
            :x="
              +mousePath.x < viewHalfWidth
                ? +mousePath.x + 50
                : +mousePath.x - (overlayEl?.getNode()?.textWidth || 0) - 100
            "
            :cornerRadius="8"
            :y="Math.max(10, +mousePath.y - 100)"
            :fill="+mousePath.x < viewHalfWidth ? options.bidsColor : options.asksColor"
          />
          <kv-text
            :text="`${options.tipPriceText}  ${mousePath.price}\n${options.tipTotalText}  ${+mousePath.totalAmount > 999 ? mousePath.totalAmount : mousePath.totalAmount}`"
            :padding="10"
            :lineHeight="1.5"
            :fill="options.tipColor"
            :fontSize="options.tipFontSize"
            :x="
              +mousePath.x < viewHalfWidth
                ? +mousePath.x + 50
                : +mousePath.x - (overlayEl?.getNode()?.textWidth || 0) - 100
            "
            :y="Math.max(10, +mousePath.y - 100)"
            ref="overlayEl"
          />
          <kv-circle
            :fill="+mousePath.x < viewHalfWidth ? options.bidsColor : options.asksColor"
            :width="6"
            :height="6"
            :x="+mousePath.x"
            :y="+mousePath.y"
          />
        </kv-group>

        <!-- x轴刻度 -->
        <kv-path
          :stroke="options.axisXBorderColor"
          :fill="options.axisXBgColor"
          :strokeWidth="1"
          :data="`M0 ${height} L0 ${viewHeight + 1} L${width} ${viewHeight + 1} L${width} ${height} Z`"
        />
        <kv-group v-for="(text, i) in xScales" :key="i">
          <kv-path
            :stroke="options.axisColor"
            :strokeWidth="1"
            :data="`M${(viewWidth / 6) * (i + 1)} ${viewHeight} L${(viewWidth / 6) * (i + 1)} ${
              viewHeight + options.axisLineWidth
            } Z`"
          />
          <kv-text
            :text="text"
            :fill="options.fontColor"
            :fontSize="options.fontSize"
            :x="(viewWidth / 6) * (i + 1)"
            :y="viewHeight + options.axisLineWidth + 2"
            :width="viewWidth / 3"
            align="center"
            :offsetX="viewWidth / 3 / 2"
          />
        </kv-group>

        <!-- y轴刻度 -->
        <kv-path
          :stroke="options.axisYBorderColor"
          :fill="options.axisYBgColor"
          :data="`M${viewWidth} 0 L${viewWidth} ${height} L${width} ${height} L${width} 0 Z`"
        />
        <kv-group v-for="(text, i) in yScales" :key="i">
          <kv-path
            :stroke="options.axisColor"
            :strokeWidth="1"
            :data="`M${viewWidth} ${text.y} L${viewWidth + options.axisLineWidth} ${text.y} Z`"
          />
          <kv-text
            :text="text.currentScaleTotal"
            :fill="options.fontColor"
            :fontSize="options.fontSize"
            :x="viewWidth + options.axisLineWidth + 2"
            :y="+text.y - 5"
            verticalAlign="middle"
          />
        </kv-group>
      </kv-layer>
    </kv-stage>
  </div>
</template>
<!-- 增加定位解决全屏问题 -->
<style scoped>
.depth-chart {
  overflow: hidden;
  position: relative;
  height: inherit;
}

.depth-chart > div:first-child {
  position: absolute;
  left: 0;
  top: 0;
}
</style>
