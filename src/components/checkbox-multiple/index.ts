
      import CheckboxMultiple from './Main.vue'
      import { App } from 'vue'
      
      CheckboxMultiple.install = (app: App) => {
        app.component(CheckboxMultiple.name, CheckboxMultiple)
      }
      
      export default CheckboxMultiple
    