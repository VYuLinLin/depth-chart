import depthChart from './components/depthChart.vue'
import type { App } from 'vue'
import '../index.d.ts'

const components = [depthChart]

export function install(app: App) {
  components.forEach((component) => {
    app.component(component.name as string, component)
  })
}
export { depthChart }

export default {
  install,
}

