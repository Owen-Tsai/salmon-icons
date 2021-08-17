
      import LockFill from './Main.vue'
      import { App } from 'vue'
      
      LockFill.install = (app: App) => {
        app.component(LockFill.name, LockFill)
      }
      
      export default LockFill
    