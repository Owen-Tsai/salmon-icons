
      import InformationFill from './Main.vue'
      import { App } from 'vue'
      
      InformationFill.install = (app: App) => {
        app.component(InformationFill.name, InformationFill)
      }
      
      export default InformationFill
    