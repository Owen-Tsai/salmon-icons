
      import ArrowDown from './Main.vue'
      import { App } from 'vue'
      
      ArrowDown.install = (app: App) => {
        app.component(ArrowDown.name, ArrowDown)
      }
      
      export default ArrowDown
    