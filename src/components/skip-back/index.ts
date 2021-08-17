
      import SkipBack from './Main.vue'
      import { App } from 'vue'
      
      SkipBack.install = (app: App) => {
        app.component(SkipBack.name, SkipBack)
      }
      
      export default SkipBack
    