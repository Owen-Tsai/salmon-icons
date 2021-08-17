
      import ClipboardFill from './Main.vue'
      import { App } from 'vue'
      
      ClipboardFill.install = (app: App) => {
        app.component(ClipboardFill.name, ClipboardFill)
      }
      
      export default ClipboardFill
    