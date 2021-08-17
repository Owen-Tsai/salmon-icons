
      import Youtube from './Main.vue'
      import { App } from 'vue'
      
      Youtube.install = (app: App) => {
        app.component(Youtube.name, Youtube)
      }
      
      export default Youtube
    