
      import SkipBackFill from './Main.vue'
      import { App } from 'vue'
      
      SkipBackFill.install = (app: App) => {
        app.component(SkipBackFill.name, SkipBackFill)
      }
      
      export default SkipBackFill
    