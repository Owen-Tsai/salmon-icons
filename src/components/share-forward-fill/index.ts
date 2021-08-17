
      import ShareForwardFill from './Main.vue'
      import { App } from 'vue'
      
      ShareForwardFill.install = (app: App) => {
        app.component(ShareForwardFill.name, ShareForwardFill)
      }
      
      export default ShareForwardFill
    