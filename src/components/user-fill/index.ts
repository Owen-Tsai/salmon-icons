
      import UserFill from './Main.vue'
      import { App } from 'vue'
      
      UserFill.install = (app: App) => {
        app.component(UserFill.name, UserFill)
      }
      
      export default UserFill
    