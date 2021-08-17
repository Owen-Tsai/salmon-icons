
      import Apps from './Main.vue'
      import { App } from 'vue'
      
      Apps.install = (app: App) => {
        app.component(Apps.name, Apps)
      }
      
      export default Apps
    