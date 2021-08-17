
      import User from './Main.vue'
      import { App } from 'vue'
      
      User.install = (app: App) => {
        app.component(User.name, User)
      }
      
      export default User
    