
      import HardDrive from './Main.vue'
      import { App } from 'vue'
      
      HardDrive.install = (app: App) => {
        app.component(HardDrive.name, HardDrive)
      }
      
      export default HardDrive
    