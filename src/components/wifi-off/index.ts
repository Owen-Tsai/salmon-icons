
      import WifiOff from './Main.vue'
      import { App } from 'vue'
      
      WifiOff.install = (app: App) => {
        app.component(WifiOff.name, WifiOff)
      }
      
      export default WifiOff
    