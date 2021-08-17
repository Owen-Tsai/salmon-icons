
      import BarChart from './Main.vue'
      import { App } from 'vue'
      
      BarChart.install = (app: App) => {
        app.component(BarChart.name, BarChart)
      }
      
      export default BarChart
    