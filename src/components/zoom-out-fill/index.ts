
      import ZoomOutFill from './Main.vue'
      import { App } from 'vue'
      
      ZoomOutFill.install = (app: App) => {
        app.component(ZoomOutFill.name, ZoomOutFill)
      }
      
      export default ZoomOutFill
    