
      import EditCircle from './Main.vue'
      import { App } from 'vue'
      
      EditCircle.install = (app: App) => {
        app.component(EditCircle.name, EditCircle)
      }
      
      export default EditCircle
    