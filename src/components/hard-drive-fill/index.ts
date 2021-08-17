
      import HardDriveFill from './Main.vue'
      import { App } from 'vue'
      
      HardDriveFill.install = (app: App) => {
        app.component(HardDriveFill.name, HardDriveFill)
      }
      
      export default HardDriveFill
    