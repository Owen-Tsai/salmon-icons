
      import ArrowLeftRight from './Main.vue'
      import { App } from 'vue'
      
      ArrowLeftRight.install = (app: App) => {
        app.component(ArrowLeftRight.name, ArrowLeftRight)
      }
      
      export default ArrowLeftRight
    