
      import UserStar from './Main.vue'
      import { App } from 'vue'
      
      UserStar.install = (app: App) => {
        app.component(UserStar.name, UserStar)
      }
      
      export default UserStar
    