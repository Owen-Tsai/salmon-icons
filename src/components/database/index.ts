
      import Database from './Main.vue'
      import { App } from 'vue'
      
      Database.install = (app: App) => {
        app.component(Database.name, Database)
      }
      
      export default Database
    