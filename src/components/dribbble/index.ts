
      import Dribbble from './Main.vue'
      import { App } from 'vue'
      
      Dribbble.install = (app: App) => {
        app.component(Dribbble.name, Dribbble)
      }
      
      export default Dribbble
    