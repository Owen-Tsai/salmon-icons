
      import AddCircleFill from './Main.vue'
      import { App } from 'vue'
      
      AddCircleFill.install = (app: App) => {
        app.component(AddCircleFill.name, AddCircleFill)
      }
      
      export default AddCircleFill
    