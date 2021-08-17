
      import LogoutBox from './Main.vue'
      import { App } from 'vue'
      
      LogoutBox.install = (app: App) => {
        app.component(LogoutBox.name, LogoutBox)
      }
      
      export default LogoutBox
    