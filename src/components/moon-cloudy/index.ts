
      import MoonCloudy from './Main.vue'
      import { App } from 'vue'
      
      MoonCloudy.install = (app: App) => {
        app.component(MoonCloudy.name, MoonCloudy)
      }
      
      export default MoonCloudy
    