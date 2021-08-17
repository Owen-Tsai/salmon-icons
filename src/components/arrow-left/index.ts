
      import ArrowLeft from './Main.vue'
      import { App } from 'vue'
      
      ArrowLeft.install = (app: App) => {
        app.component(ArrowLeft.name, ArrowLeft)
      }
      
      export default ArrowLeft
    