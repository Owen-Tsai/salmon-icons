
      import Inbox from './Main.vue'
      import { App } from 'vue'
      
      Inbox.install = (app: App) => {
        app.component(Inbox.name, Inbox)
      }
      
      export default Inbox
    