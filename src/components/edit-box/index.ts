
      import EditBox from './Main.vue'
      import { App } from 'vue'
      
      EditBox.install = (app: App) => {
        app.component(EditBox.name, EditBox)
      }
      
      export default EditBox
    