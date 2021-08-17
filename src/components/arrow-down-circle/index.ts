
      import ArrowDownCircle from './Main.vue'
      import { App } from 'vue'
      
      ArrowDownCircle.install = (app: App) => {
        app.component(ArrowDownCircle.name, ArrowDownCircle)
      }
      
      export default ArrowDownCircle
    