
      import ShoppingCart from './Main.vue'
      import { App } from 'vue'
      
      ShoppingCart.install = (app: App) => {
        app.component(ShoppingCart.name, ShoppingCart)
      }
      
      export default ShoppingCart
    