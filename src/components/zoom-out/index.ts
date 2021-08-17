
      import ZoomOut from './Main.vue'
      import { App } from 'vue'
      
      ZoomOut.install = (app: App) => {
        app.component(ZoomOut.name, ZoomOut)
      }
      
      export default ZoomOut
    