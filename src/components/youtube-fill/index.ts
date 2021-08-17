
      import YoutubeFill from './Main.vue'
      import { App } from 'vue'
      
      YoutubeFill.install = (app: App) => {
        app.component(YoutubeFill.name, YoutubeFill)
      }
      
      export default YoutubeFill
    