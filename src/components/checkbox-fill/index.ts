
      import CheckboxFill from './Main.vue'
      import { App } from 'vue'
      
      CheckboxFill.install = (app: App) => {
        app.component(CheckboxFill.name, CheckboxFill)
      }
      
      export default CheckboxFill
    