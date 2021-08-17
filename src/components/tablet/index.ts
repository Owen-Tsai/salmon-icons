
      import Tablet from './Main.vue'
      import { App } from 'vue'
      
      Tablet.install = (app: App) => {
        app.component(Tablet.name, Tablet)
      }
      
      export default Tablet
    