
      import Angularjs from './Main.vue'
      import { App } from 'vue'
      
      Angularjs.install = (app: App) => {
        app.component(Angularjs.name, Angularjs)
      }
      
      export default Angularjs
    