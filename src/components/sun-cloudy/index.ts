
      import SunCloudy from './Main.vue'
      import { App } from 'vue'
      
      SunCloudy.install = (app: App) => {
        app.component(SunCloudy.name, SunCloudy)
      }
      
      export default SunCloudy
    