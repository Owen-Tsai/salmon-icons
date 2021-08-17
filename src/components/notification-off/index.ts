
      import NotificationOff from './Main.vue'
      import { App } from 'vue'
      
      NotificationOff.install = (app: App) => {
        app.component(NotificationOff.name, NotificationOff)
      }
      
      export default NotificationOff
    