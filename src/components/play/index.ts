
      import Play from './Main.vue'
      import { App } from 'vue'
      
      Play.install = (app: App) => {
        app.component(Play.name, Play)
      }
      
      export default Play
    