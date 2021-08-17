
      import RewindFill from './Main.vue'
      import { App } from 'vue'
      
      RewindFill.install = (app: App) => {
        app.component(RewindFill.name, RewindFill)
      }
      
      export default RewindFill
    