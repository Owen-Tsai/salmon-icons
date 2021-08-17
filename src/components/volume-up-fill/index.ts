
      import VolumeUpFill from './Main.vue'
      import { App } from 'vue'
      
      VolumeUpFill.install = (app: App) => {
        app.component(VolumeUpFill.name, VolumeUpFill)
      }
      
      export default VolumeUpFill
    