
      import AddBoxFill from './Main.vue'
      import { App } from 'vue'
      
      AddBoxFill.install = (app: App) => {
        app.component(AddBoxFill.name, AddBoxFill)
      }
      
      export default AddBoxFill
    