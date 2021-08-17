
      import Tv from './Main.vue'
      import { App } from 'vue'
      
      Tv.install = (app: App) => {
        app.component(Tv.name, Tv)
      }
      
      export default Tv
    