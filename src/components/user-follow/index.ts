
      import UserFollow from './Main.vue'
      import { App } from 'vue'
      
      UserFollow.install = (app: App) => {
        app.component(UserFollow.name, UserFollow)
      }
      
      export default UserFollow
    