
      import Clipboard from './Main.vue'
      import { App } from 'vue'
      
      Clipboard.install = (app: App) => {
        app.component(Clipboard.name, Clipboard)
      }
      
      export default Clipboard
    