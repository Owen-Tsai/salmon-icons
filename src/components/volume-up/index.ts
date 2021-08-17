
      import VolumeUp from './Main.vue'
      import { App } from 'vue'
      
      VolumeUp.install = (app: App) => {
        app.component(VolumeUp.name, VolumeUp)
      }
      
      export default VolumeUp
    