
      import Attachment from './Main.vue'
      import { App } from 'vue'
      
      Attachment.install = (app: App) => {
        app.component(Attachment.name, Attachment)
      }
      
      export default Attachment
    