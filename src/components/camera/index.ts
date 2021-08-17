
      import Camera from './Main.vue'
      import { App } from 'vue'
      
      Camera.install = (app: App) => {
        app.component(Camera.name, Camera)
      }
      
      export default Camera
    