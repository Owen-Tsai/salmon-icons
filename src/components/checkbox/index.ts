
      import Checkbox from './Main.vue'
      import { App } from 'vue'
      
      Checkbox.install = (app: App) => {
        app.component(Checkbox.name, Checkbox)
      }
      
      export default Checkbox
    