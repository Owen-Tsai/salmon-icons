
      import Cursor from './Main.vue'
      import { App } from 'vue'
      
      Cursor.install = (app: App) => {
        app.component(Cursor.name, Cursor)
      }
      
      export default Cursor
    