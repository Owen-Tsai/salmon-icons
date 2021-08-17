
      import TerminalBoxFill from './Main.vue'
      import { App } from 'vue'
      
      TerminalBoxFill.install = (app: App) => {
        app.component(TerminalBoxFill.name, TerminalBoxFill)
      }
      
      export default TerminalBoxFill
    