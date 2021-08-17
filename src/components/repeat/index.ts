
      import Repeat from './Main.vue'
      import { App } from 'vue'
      
      Repeat.install = (app: App) => {
        app.component(Repeat.name, Repeat)
      }
      
      export default Repeat
    