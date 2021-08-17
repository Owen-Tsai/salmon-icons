
      import Rewind from './Main.vue'
      import { App } from 'vue'
      
      Rewind.install = (app: App) => {
        app.component(Rewind.name, Rewind)
      }
      
      export default Rewind
    