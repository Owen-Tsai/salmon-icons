
      import Foggy from './Main.vue'
      import { App } from 'vue'
      
      Foggy.install = (app: App) => {
        app.component(Foggy.name, Foggy)
      }
      
      export default Foggy
    