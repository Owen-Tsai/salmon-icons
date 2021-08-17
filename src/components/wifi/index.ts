
      import Wifi from './Main.vue'
      import { App } from 'vue'
      
      Wifi.install = (app: App) => {
        app.component(Wifi.name, Wifi)
      }
      
      export default Wifi
    