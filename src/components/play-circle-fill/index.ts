
      import PlayCircleFill from './Main.vue'
      import { App } from 'vue'
      
      PlayCircleFill.install = (app: App) => {
        app.component(PlayCircleFill.name, PlayCircleFill)
      }
      
      export default PlayCircleFill
    