
      import ArrowRightUp from './Main.vue'
      import { App } from 'vue'
      
      ArrowRightUp.install = (app: App) => {
        app.component(ArrowRightUp.name, ArrowRightUp)
      }
      
      export default ArrowRightUp
    