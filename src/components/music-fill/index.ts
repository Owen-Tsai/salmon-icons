
      import MusicFill from './Main.vue'
      import { App } from 'vue'
      
      MusicFill.install = (app: App) => {
        app.component(MusicFill.name, MusicFill)
      }
      
      export default MusicFill
    