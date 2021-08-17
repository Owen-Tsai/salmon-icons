
      import Notification from './Main.vue'
      import { App } from 'vue'
      
      Notification.install = (app: App) => {
        app.component(Notification.name, Notification)
      }
      
      export default Notification
    