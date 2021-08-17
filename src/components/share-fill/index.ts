
      import ShareFill from './Main.vue'
      import { App } from 'vue'
      
      ShareFill.install = (app: App) => {
        app.component(ShareFill.name, ShareFill)
      }
      
      export default ShareFill
    