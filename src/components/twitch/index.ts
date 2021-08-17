
      import Twitch from './Main.vue'
      import { App } from 'vue'
      
      Twitch.install = (app: App) => {
        app.component(Twitch.name, Twitch)
      }
      
      export default Twitch
    