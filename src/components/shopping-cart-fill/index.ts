
      import ShoppingCartFill from './Main.vue'
      import { App } from 'vue'
      
      ShoppingCartFill.install = (app: App) => {
        app.component(ShoppingCartFill.name, ShoppingCartFill)
      }
      
      export default ShoppingCartFill
    