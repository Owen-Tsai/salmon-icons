
      import VolumeMute from './Main.vue'
      import { App } from 'vue'
      
      VolumeMute.install = (app: App) => {
        app.component(VolumeMute.name, VolumeMute)
      }
      
      export default VolumeMute
    