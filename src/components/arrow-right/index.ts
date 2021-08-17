
      import ArrowRight from './Main.vue'
      import { App } from 'vue'
      
      ArrowRight.install = (app: App) => {
        app.component(ArrowRight.name, ArrowRight)
      }
      
      export default ArrowRight
    