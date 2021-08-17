
      import PriceTag from './Main.vue'
      import { App } from 'vue'
      
      PriceTag.install = (app: App) => {
        app.component(PriceTag.name, PriceTag)
      }
      
      export default PriceTag
    