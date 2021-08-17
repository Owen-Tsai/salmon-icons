
      import InstagramFill from './Main.vue'
      import { App } from 'vue'
      
      InstagramFill.install = (app: App) => {
        app.component(InstagramFill.name, InstagramFill)
      }
      
      export default InstagramFill
    