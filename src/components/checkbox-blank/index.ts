
      import CheckboxBlank from './Main.vue'
      import { App } from 'vue'
      
      CheckboxBlank.install = (app: App) => {
        app.component(CheckboxBlank.name, CheckboxBlank)
      }
      
      export default CheckboxBlank
    