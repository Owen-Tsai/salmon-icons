
      import BarChartFill from './Main.vue'
      import { App } from 'vue'
      
      BarChartFill.install = (app: App) => {
        app.component(BarChartFill.name, BarChartFill)
      }
      
      export default BarChartFill
    