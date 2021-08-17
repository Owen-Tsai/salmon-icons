
      import SaveFill from './Main.vue'
      import { App } from 'vue'
      
      SaveFill.install = (app: App) => {
        app.component(SaveFill.name, SaveFill)
      }
      
      export default SaveFill
    