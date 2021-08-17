
      import Lock from './Main.vue'
      import { App } from 'vue'
      
      Lock.install = (app: App) => {
        app.component(Lock.name, Lock)
      }
      
      export default Lock
    