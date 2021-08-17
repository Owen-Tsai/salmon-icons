
      import Forbid from './Main.vue'
      import { App } from 'vue'
      
      Forbid.install = (app: App) => {
        app.component(Forbid.name, Forbid)
      }
      
      export default Forbid
    