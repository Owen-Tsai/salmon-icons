
      import SkipForward from './Main.vue'
      import { App } from 'vue'
      
      SkipForward.install = (app: App) => {
        app.component(SkipForward.name, SkipForward)
      }
      
      export default SkipForward
    