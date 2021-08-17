
      import Eject from './Main.vue'
      import { App } from 'vue'
      
      Eject.install = (app: App) => {
        app.component(Eject.name, Eject)
      }
      
      export default Eject
    