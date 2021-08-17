
      import CheckboxCircle from './Main.vue'
      import { App } from 'vue'
      
      CheckboxCircle.install = (app: App) => {
        app.component(CheckboxCircle.name, CheckboxCircle)
      }
      
      export default CheckboxCircle
    