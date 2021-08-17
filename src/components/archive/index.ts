
      import Archive from './Main.vue'
      import { App } from 'vue'
      
      Archive.install = (app: App) => {
        app.component(Archive.name, Archive)
      }
      
      export default Archive
    