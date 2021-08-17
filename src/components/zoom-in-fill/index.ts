
      import ZoomInFill from './Main.vue'
      import { App } from 'vue'
      
      ZoomInFill.install = (app: App) => {
        app.component(ZoomInFill.name, ZoomInFill)
      }
      
      export default ZoomInFill
    