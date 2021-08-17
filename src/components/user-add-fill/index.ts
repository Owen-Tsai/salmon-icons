
      import UserAddFill from './Main.vue'
      import { App } from 'vue'
      
      UserAddFill.install = (app: App) => {
        app.component(UserAddFill.name, UserAddFill)
      }
      
      export default UserAddFill
    