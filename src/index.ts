import VueKonva from 'vue-konva';
import depthChart from './components/depthChart.vue'
import type { App } from 'vue'

const components = [depthChart]

export function install(app: App) {
  components.forEach((component) => {
    app.use(VueKonva, {
      prefix: 'kv'
    })
    app.component(component.name as string, component)
  })
}

export default {
  install,
}

export { depthChart }
