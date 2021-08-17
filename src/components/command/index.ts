
      import Command from './Main.vue'
      import { App } from 'vue'
      
      Command.install = (app: App) => {
        app.component(Command.name, Command)
      }
      
      export default Command
    