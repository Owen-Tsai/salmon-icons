
      import ExternalLink from './Main.vue'
      import { App } from 'vue'
      
      ExternalLink.install = (app: App) => {
        app.component(ExternalLink.name, ExternalLink)
      }
      
      export default ExternalLink
    