
      import LockUnlock from './Main.vue'
      import { App } from 'vue'
      
      LockUnlock.install = (app: App) => {
        app.component(LockUnlock.name, LockUnlock)
      }
      
      export default LockUnlock
    