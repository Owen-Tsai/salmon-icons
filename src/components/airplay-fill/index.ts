
      import AirplayFill from './Main.vue'
      import { App } from 'vue'
      
      AirplayFill.install = (app: App) => {
        app.component(AirplayFill.name, AirplayFill)
      }
      
      export default AirplayFill
    