
      import EditFill from './Main.vue'
      import { App } from 'vue'
      
      EditFill.install = (app: App) => {
        app.component(EditFill.name, EditFill)
      }
      
      export default EditFill
    