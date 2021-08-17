
      import PlayFill from './Main.vue'
      import { App } from 'vue'
      
      PlayFill.install = (app: App) => {
        app.component(PlayFill.name, PlayFill)
      }
      
      export default PlayFill
    