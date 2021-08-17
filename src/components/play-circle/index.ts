
      import PlayCircle from './Main.vue'
      import { App } from 'vue'
      
      PlayCircle.install = (app: App) => {
        app.component(PlayCircle.name, PlayCircle)
      }
      
      export default PlayCircle
    