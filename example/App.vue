<script setup lang="ts">
import { ref } from 'vue'

const options = {
  bidsColor: '#ff0000',
  asksColor: '#00ff00',
  tipColor: '#fff',
  tipFontSize: 12,
}
const symbolData = ref<any>({
  currentPrice: 3606.17, // 当前价格
  priceScale: 2, // 价格精度
  qtyScale: 2, // 数量精度
})
const depthData = ref<any>({
  bids: [],
  asks: [],
})
const kLineDataList = ref<any[]>([])
let newData = ref<any>()
let cacheList: any[] = []
const getMockData = () => {
  console.info('Start loading mock data')
  import('../example/mock/index.json').then((res) => {
    depthData.value = {
      bids: res.bids,
      asks: res.asks,
    }
    console.log(res, depthData.value)
    cacheList = kLineDataList.value
    const flag = setInterval(() => {
      if (!cacheList.length) {
        console.info('Loading mock data is over')
        clearInterval(flag)
        return
      }
      const newNode = cacheList.shift()
      if (newNode) {
        newData.value = newNode
      }
    }, 1000)
  })
}
getMockData()
</script>

<template>
  <main>
    <depthChart :options="options" :symbolData="symbolData" :depthData="depthData"></depthChart>
  </main>
</template>

<style scoped>
main {
  width: 100%;
  height: 30vh;
}
</style>
