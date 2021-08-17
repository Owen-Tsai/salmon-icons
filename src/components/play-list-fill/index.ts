
      import PlayListFill from './Main.vue'
      import { App } from 'vue'
      
      PlayListFill.install = (app: App) => {
        app.component(PlayListFill.name, PlayListFill)
      }
      
      export default PlayListFill
    