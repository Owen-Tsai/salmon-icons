
      import UserStarFill from './Main.vue'
      import { App } from 'vue'
      
      UserStarFill.install = (app: App) => {
        app.component(UserStarFill.name, UserStarFill)
      }
      
      export default UserStarFill
    