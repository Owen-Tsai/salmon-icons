
      import ArrowUpCircle from './Main.vue'
      import { App } from 'vue'
      
      ArrowUpCircle.install = (app: App) => {
        app.component(ArrowUpCircle.name, ArrowUpCircle)
      }
      
      export default ArrowUpCircle
    