
      import ShareForward from './Main.vue'
      import { App } from 'vue'
      
      ShareForward.install = (app: App) => {
        app.component(ShareForward.name, ShareForward)
      }
      
      export default ShareForward
    