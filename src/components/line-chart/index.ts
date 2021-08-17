
      import LineChart from './Main.vue'
      import { App } from 'vue'
      
      LineChart.install = (app: App) => {
        app.component(LineChart.name, LineChart)
      }
      
      export default LineChart
    