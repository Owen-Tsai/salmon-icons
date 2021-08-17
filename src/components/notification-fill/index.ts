
      import NotificationFill from './Main.vue'
      import { App } from 'vue'
      
      NotificationFill.install = (app: App) => {
        app.component(NotificationFill.name, NotificationFill)
      }
      
      export default NotificationFill
    