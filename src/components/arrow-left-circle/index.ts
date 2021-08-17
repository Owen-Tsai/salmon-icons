
      import ArrowLeftCircle from './Main.vue'
      import { App } from 'vue'
      
      ArrowLeftCircle.install = (app: App) => {
        app.component(ArrowLeftCircle.name, ArrowLeftCircle)
      }
      
      export default ArrowLeftCircle
    