
      import ArrowUpDown from './Main.vue'
      import { App } from 'vue'
      
      ArrowUpDown.install = (app: App) => {
        app.component(ArrowUpDown.name, ArrowUpDown)
      }
      
      export default ArrowUpDown
    