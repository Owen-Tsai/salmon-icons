
      import TerminalBox from './Main.vue'
      import { App } from 'vue'
      
      TerminalBox.install = (app: App) => {
        app.component(TerminalBox.name, TerminalBox)
      }
      
      export default TerminalBox
    