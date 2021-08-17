
      import BlurOffFill from './Main.vue'
      import { App } from 'vue'
      
      BlurOffFill.install = (app: App) => {
        app.component(BlurOffFill.name, BlurOffFill)
      }
      
      export default BlurOffFill
    