
      import BubbleChart from './Main.vue'
      import { App } from 'vue'
      
      BubbleChart.install = (app: App) => {
        app.component(BubbleChart.name, BubbleChart)
      }
      
      export default BubbleChart
    