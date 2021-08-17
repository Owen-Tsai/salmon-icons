
      import InboxFill from './Main.vue'
      import { App } from 'vue'
      
      InboxFill.install = (app: App) => {
        app.component(InboxFill.name, InboxFill)
      }
      
      export default InboxFill
    