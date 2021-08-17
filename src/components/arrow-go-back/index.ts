
      import ArrowGoBack from './Main.vue'
      import { App } from 'vue'
      
      ArrowGoBack.install = (app: App) => {
        app.component(ArrowGoBack.name, ArrowGoBack)
      }
      
      export default ArrowGoBack
    