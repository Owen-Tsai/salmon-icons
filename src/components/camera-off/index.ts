
      import CameraOff from './Main.vue'
      import { App } from 'vue'
      
      CameraOff.install = (app: App) => {
        app.component(CameraOff.name, CameraOff)
      }
      
      export default CameraOff
    