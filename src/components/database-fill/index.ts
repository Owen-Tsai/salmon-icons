
      import DatabaseFill from './Main.vue'
      import { App } from 'vue'
      
      DatabaseFill.install = (app: App) => {
        app.component(DatabaseFill.name, DatabaseFill)
      }
      
      export default DatabaseFill
    