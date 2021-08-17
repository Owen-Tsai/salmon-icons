
      import CameraFill from './Main.vue'
      import { App } from 'vue'
      
      CameraFill.install = (app: App) => {
        app.component(CameraFill.name, CameraFill)
      }
      
      export default CameraFill
    