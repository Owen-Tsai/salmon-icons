
      import MailOpenFill from './Main.vue'
      import { App } from 'vue'
      
      MailOpenFill.install = (app: App) => {
        app.component(MailOpenFill.name, MailOpenFill)
      }
      
      export default MailOpenFill
    