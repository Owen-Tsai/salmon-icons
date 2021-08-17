
      import PieChartFill from './Main.vue'
      import { App } from 'vue'
      
      PieChartFill.install = (app: App) => {
        app.component(PieChartFill.name, PieChartFill)
      }
      
      export default PieChartFill
    