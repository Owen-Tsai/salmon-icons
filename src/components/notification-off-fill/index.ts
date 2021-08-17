
      import NotificationOffFill from './Main.vue'
      import { App } from 'vue'
      
      NotificationOffFill.install = (app: App) => {
        app.component(NotificationOffFill.name, NotificationOffFill)
      }
      
      export default NotificationOffFill
    