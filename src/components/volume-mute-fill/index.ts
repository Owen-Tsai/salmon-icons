
      import VolumeMuteFill from './Main.vue'
      import { App } from 'vue'
      
      VolumeMuteFill.install = (app: App) => {
        app.component(VolumeMuteFill.name, VolumeMuteFill)
      }
      
      export default VolumeMuteFill
    