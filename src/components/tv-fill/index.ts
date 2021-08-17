
      import TvFill from './Main.vue'
      import { App } from 'vue'
      
      TvFill.install = (app: App) => {
        app.component(TvFill.name, TvFill)
      }
      
      export default TvFill
    