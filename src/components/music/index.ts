
      import Music from './Main.vue'
      import { App } from 'vue'
      
      Music.install = (app: App) => {
        app.component(Music.name, Music)
      }
      
      export default Music
    