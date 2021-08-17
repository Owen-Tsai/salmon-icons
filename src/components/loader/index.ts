
      import Loader from './Main.vue'
      import { App } from 'vue'
      
      Loader.install = (app: App) => {
        app.component(Loader.name, Loader)
      }
      
      export default Loader
    