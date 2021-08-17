
      import Eye from './Main.vue'
      import { App } from 'vue'
      
      Eye.install = (app: App) => {
        app.component(Eye.name, Eye)
      }
      
      export default Eye
    