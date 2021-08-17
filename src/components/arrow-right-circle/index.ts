
      import ArrowRightCircle from './Main.vue'
      import { App } from 'vue'
      
      ArrowRightCircle.install = (app: App) => {
        app.component(ArrowRightCircle.name, ArrowRightCircle)
      }
      
      export default ArrowRightCircle
    