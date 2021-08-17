
      import Bluetooth from './Main.vue'
      import { App } from 'vue'
      
      Bluetooth.install = (app: App) => {
        app.component(Bluetooth.name, Bluetooth)
      }
      
      export default Bluetooth
    