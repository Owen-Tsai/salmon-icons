
      import EjectFill from './Main.vue'
      import { App } from 'vue'
      
      EjectFill.install = (app: App) => {
        app.component(EjectFill.name, EjectFill)
      }
      
      export default EjectFill
    