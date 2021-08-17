
      import StackFill from './Main.vue'
      import { App } from 'vue'
      
      StackFill.install = (app: App) => {
        app.component(StackFill.name, StackFill)
      }
      
      export default StackFill
    