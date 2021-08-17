
      import UserFollowFill from './Main.vue'
      import { App } from 'vue'
      
      UserFollowFill.install = (app: App) => {
        app.component(UserFollowFill.name, UserFollowFill)
      }
      
      export default UserFollowFill
    