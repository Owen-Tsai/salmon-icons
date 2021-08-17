
      import PriceTagFill from './Main.vue'
      import { App } from 'vue'
      
      PriceTagFill.install = (app: App) => {
        app.component(PriceTagFill.name, PriceTagFill)
      }
      
      export default PriceTagFill
    