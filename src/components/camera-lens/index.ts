
      import CameraLens from './Main.vue'
      import { App } from 'vue'
      
      CameraLens.install = (app: App) => {
        app.component(CameraLens.name, CameraLens)
      }
      
      export default CameraLens
    