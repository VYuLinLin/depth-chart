# @real/depth-chart

交易平台自定义深度图表组件，使用vue3和vue-konva开发

## 功能

1、支持自定义vue-konva全部配置

2、自适应屏幕分辨率，宽度、高度自适应

3、支持价格、数量、小数位精度控制

4、支持所有元素的颜色、样式控制

# 示意图

![image](asstes/depth2025.png)
<video autoplay="true" controls="controls"  src="https://private-user-images.githubusercontent.com/28807436/400177436-2c2266f4-a3ea-4abb-be43-6a9f8f687b4b.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzYwNTA0MDEsIm5iZiI6MTczNjA1MDEwMSwicGF0aCI6Ii8yODgwNzQzNi80MDAxNzc0MzYtMmMyMjY2ZjQtYTNlYS00YWJiLWJlNDMtNmE5ZjhmNjg3YjRiLm1wND9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAxMDUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMTA1VDA0MDgyMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTM3NWQ4NzkzOTI3OTA0MGExOTdiMmNhYzk2YThmODAwNDg1ZmYxN2NlNjE5ODhhMmMzOWZkN2Q5NmUyMWRjNGImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.7FzFVdA2yPQq34TRIkN8MXsEKVWTH_2zm11c2nUyj3I" title="asstes/depth2025.mp4"></video>
</video>

# 使用方式

## 1. 安装

`npm i @real/depth-chart`

## 2. 引用

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import depthChart from '@real/depth-chart'
// vue3 全局引用
const app = createApp(App)
app.use(depthChart)
app.mount('#app')
```

```vue
<!-- 组件引用 -->
<script setup lang="ts">
import { depthChart } from '@real/depth-chart'
</script>
```

## 3.调用

示例：example/App.vue

```vue
<depthChart :options="options" :symbolData="symbolData" :depthData="depthData"></depthChart>
```
