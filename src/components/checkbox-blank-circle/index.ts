
      import CheckboxBlankCircle from './Main.vue'
      import { App } from 'vue'
      
      CheckboxBlankCircle.install = (app: App) => {
        app.component(CheckboxBlankCircle.name, CheckboxBlankCircle)
      }
      
      export default CheckboxBlankCircle
    