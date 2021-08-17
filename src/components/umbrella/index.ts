
      import Umbrella from './Main.vue'
      import { App } from 'vue'
      
      Umbrella.install = (app: App) => {
        app.component(Umbrella.name, Umbrella)
      }
      
      export default Umbrella
    