
      import ArrowGoForward from './Main.vue'
      import { App } from 'vue'
      
      ArrowGoForward.install = (app: App) => {
        app.component(ArrowGoForward.name, ArrowGoForward)
      }
      
      export default ArrowGoForward
    