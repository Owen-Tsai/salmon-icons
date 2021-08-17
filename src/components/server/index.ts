
      import Server from './Main.vue'
      import { App } from 'vue'
      
      Server.install = (app: App) => {
        app.component(Server.name, Server)
      }
      
      export default Server
    