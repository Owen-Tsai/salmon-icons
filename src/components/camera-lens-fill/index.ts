
      import CameraLensFill from './Main.vue'
      import { App } from 'vue'
      
      CameraLensFill.install = (app: App) => {
        app.component(CameraLensFill.name, CameraLensFill)
      }
      
      export default CameraLensFill
    