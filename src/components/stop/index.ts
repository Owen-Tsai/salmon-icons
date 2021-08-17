
      import Stop from './Main.vue'
      import { App } from 'vue'
      
      Stop.install = (app: App) => {
        app.component(Stop.name, Stop)
      }
      
      export default Stop
    