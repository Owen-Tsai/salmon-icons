
      import AddCircle from './Main.vue'
      import { App } from 'vue'
      
      AddCircle.install = (app: App) => {
        app.component(AddCircle.name, AddCircle)
      }
      
      export default AddCircle
    