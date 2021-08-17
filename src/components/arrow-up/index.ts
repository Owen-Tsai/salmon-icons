
      import ArrowUp from './Main.vue'
      import { App } from 'vue'
      
      ArrowUp.install = (app: App) => {
        app.component(ArrowUp.name, ArrowUp)
      }
      
      export default ArrowUp
    