
      import CheckboxIndeterminate from './Main.vue'
      import { App } from 'vue'
      
      CheckboxIndeterminate.install = (app: App) => {
        app.component(CheckboxIndeterminate.name, CheckboxIndeterminate)
      }
      
      export default CheckboxIndeterminate
    