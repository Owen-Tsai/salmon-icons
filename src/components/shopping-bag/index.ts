
      import ShoppingBag from './Main.vue'
      import { App } from 'vue'
      
      ShoppingBag.install = (app: App) => {
        app.component(ShoppingBag.name, ShoppingBag)
      }
      
      export default ShoppingBag
    