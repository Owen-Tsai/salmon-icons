
      import Edit from './Main.vue'
      import { App } from 'vue'
      
      Edit.install = (app: App) => {
        app.component(Edit.name, Edit)
      }
      
      export default Edit
    