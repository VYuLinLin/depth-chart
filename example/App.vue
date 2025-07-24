<script setup lang="ts">
import { ref } from 'vue'

const options = ref({ isRedUp: false })
const symbolData = ref<any>({
  currentPrice: 3606.17, // 当前价格
  priceScale: 2, // 价格精度
  qtyScale: 4, // 数量精度
})
const depthData = ref<any>({
  bids: [],
  asks: [],
})
const showChart = ref(true)
const getMockData = () => {
  console.info('Start loading mock data')
  import('../example/mock/index.json').then((res) => {
    depthData.value = {
      bids: res.bids,
      asks: res.asks,
    }
  })
}
getMockData()
</script>

<template>
  <main>
    <div class="btns">
      <button @click="showChart = !showChart">show/hide</button>
      <button @click="options.isRedUp = !options.isRedUp">Color switch</button>
    </div>
    <div v-if="options.isRedUp">Model: Red Up/Green Down</div>
    <div v-else>Model: Red Down/Green Up</div>
    <depthChart
      v-if="showChart"
      :options="options"
      :symbolData="symbolData"
      :depthData="depthData"
    ></depthChart>
  </main>
</template>

<style scoped>
main {
  width: 100%;
  height: 30vh;
  text-align: center;
}
.btns {
  margin: 20px 0;
  display: flex;
  justify-content: center;
  gap: 6px;
}
</style>
