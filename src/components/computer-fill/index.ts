
      import ComputerFill from './Main.vue'
      import { App } from 'vue'
      
      ComputerFill.install = (app: App) => {
        app.component(ComputerFill.name, ComputerFill)
      }
      
      export default ComputerFill
    