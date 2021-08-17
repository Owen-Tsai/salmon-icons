
      import MailOpen from './Main.vue'
      import { App } from 'vue'
      
      MailOpen.install = (app: App) => {
        app.component(MailOpen.name, MailOpen)
      }
      
      export default MailOpen
    