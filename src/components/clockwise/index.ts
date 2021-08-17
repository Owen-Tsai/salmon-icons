
      import Clockwise from './Main.vue'
      import { App } from 'vue'
      
      Clockwise.install = (app: App) => {
        app.component(Clockwise.name, Clockwise)
      }
      
      export default Clockwise
    