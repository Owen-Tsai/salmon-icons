
      import UserAdd from './Main.vue'
      import { App } from 'vue'
      
      UserAdd.install = (app: App) => {
        app.component(UserAdd.name, UserAdd)
      }
      
      export default UserAdd
    