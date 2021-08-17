
      import ShoppingBagFill from './Main.vue'
      import { App } from 'vue'
      
      ShoppingBagFill.install = (app: App) => {
        app.component(ShoppingBagFill.name, ShoppingBagFill)
      }
      
      export default ShoppingBagFill
    