<script setup lang="ts">
import { ref } from 'vue'

const options = {}
const symbolData = ref<any>({
  currentPrice: 3606.17, // 当前价格
  priceScale: 2, // 价格精度
  qtyScale: 4, // 数量精度
})
const depthData = ref<any>({
  bids: [],
  asks: [],
})
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
    <depthChart :options="options" :symbolData="symbolData" :depthData="depthData"></depthChart>
  </main>
</template>

<style scoped>
main {
  width: 100%;
  height: 30vh;
}
</style>
