
      import BubbleChartFill from './Main.vue'
      import { App } from 'vue'
      
      BubbleChartFill.install = (app: App) => {
        app.component(BubbleChartFill.name, BubbleChartFill)
      }
      
      export default BubbleChartFill
    