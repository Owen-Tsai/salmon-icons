
      import VolumeDown from './Main.vue'
      import { App } from 'vue'
      
      VolumeDown.install = (app: App) => {
        app.component(VolumeDown.name, VolumeDown)
      }
      
      export default VolumeDown
    