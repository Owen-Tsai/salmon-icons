
      import ServerFill from './Main.vue'
      import { App } from 'vue'
      
      ServerFill.install = (app: App) => {
        app.component(ServerFill.name, ServerFill)
      }
      
      export default ServerFill
    