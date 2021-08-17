
      import UserUnfollow from './Main.vue'
      import { App } from 'vue'
      
      UserUnfollow.install = (app: App) => {
        app.component(UserUnfollow.name, UserUnfollow)
      }
      
      export default UserUnfollow
    