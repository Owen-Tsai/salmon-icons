
      import Thunderstorms from './Main.vue'
      import { App } from 'vue'
      
      Thunderstorms.install = (app: App) => {
        app.component(Thunderstorms.name, Thunderstorms)
      }
      
      export default Thunderstorms
    