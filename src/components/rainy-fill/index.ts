
      import RainyFill from './Main.vue'
      import { App } from 'vue'
      
      RainyFill.install = (app: App) => {
        app.component(RainyFill.name, RainyFill)
      }
      
      export default RainyFill
    