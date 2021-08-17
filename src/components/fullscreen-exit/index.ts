
      import FullscreenExit from './Main.vue'
      import { App } from 'vue'
      
      FullscreenExit.install = (app: App) => {
        app.component(FullscreenExit.name, FullscreenExit)
      }
      
      export default FullscreenExit
    