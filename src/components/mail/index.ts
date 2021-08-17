
      import Mail from './Main.vue'
      import { App } from 'vue'
      
      Mail.install = (app: App) => {
        app.component(Mail.name, Mail)
      }
      
      export default Mail
    