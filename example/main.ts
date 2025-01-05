import { createApp } from 'vue'
import App from './App.vue'
import depthChart from '@/index'

const app = createApp(App)
app.use(depthChart)
app.mount('#app')
