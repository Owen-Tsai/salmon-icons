
      import PieChart from './Main.vue'
      import { App } from 'vue'
      
      PieChart.install = (app: App) => {
        app.component(PieChart.name, PieChart)
      }
      
      export default PieChart
    