
      import OrderPlay from './Main.vue'
      import { App } from 'vue'
      
      OrderPlay.install = (app: App) => {
        app.component(OrderPlay.name, OrderPlay)
      }
      
      export default OrderPlay
    