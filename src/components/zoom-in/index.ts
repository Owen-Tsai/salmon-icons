
      import ZoomIn from './Main.vue'
      import { App } from 'vue'
      
      ZoomIn.install = (app: App) => {
        app.component(ZoomIn.name, ZoomIn)
      }
      
      export default ZoomIn
    