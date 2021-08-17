
      import Anticlockwise from './Main.vue'
      import { App } from 'vue'
      
      Anticlockwise.install = (app: App) => {
        app.component(Anticlockwise.name, Anticlockwise)
      }
      
      export default Anticlockwise
    