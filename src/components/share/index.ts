
      import Share from './Main.vue'
      import { App } from 'vue'
      
      Share.install = (app: App) => {
        app.component(Share.name, Share)
      }
      
      export default Share
    