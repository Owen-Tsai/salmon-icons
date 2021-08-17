
      import TwitchFill from './Main.vue'
      import { App } from 'vue'
      
      TwitchFill.install = (app: App) => {
        app.component(TwitchFill.name, TwitchFill)
      }
      
      export default TwitchFill
    