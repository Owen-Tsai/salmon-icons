
      import Download from './Main.vue'
      import { App } from 'vue'
      
      Download.install = (app: App) => {
        app.component(Download.name, Download)
      }
      
      export default Download
    