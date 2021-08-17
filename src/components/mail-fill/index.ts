
      import MailFill from './Main.vue'
      import { App } from 'vue'
      
      MailFill.install = (app: App) => {
        app.component(MailFill.name, MailFill)
      }
      
      export default MailFill
    