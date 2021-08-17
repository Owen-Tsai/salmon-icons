
      import PlayList from './Main.vue'
      import { App } from 'vue'
      
      PlayList.install = (app: App) => {
        app.component(PlayList.name, PlayList)
      }
      
      export default PlayList
    