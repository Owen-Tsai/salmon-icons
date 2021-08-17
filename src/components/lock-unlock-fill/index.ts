
      import LockUnlockFill from './Main.vue'
      import { App } from 'vue'
      
      LockUnlockFill.install = (app: App) => {
        app.component(LockUnlockFill.name, LockUnlockFill)
      }
      
      export default LockUnlockFill
    