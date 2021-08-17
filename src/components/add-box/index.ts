
      import AddBox from './Main.vue'
      import { App } from 'vue'
      
      AddBox.install = (app: App) => {
        app.component(AddBox.name, AddBox)
      }
      
      export default AddBox
    