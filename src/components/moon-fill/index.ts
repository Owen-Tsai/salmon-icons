
      import MoonFill from './Main.vue'
      import { App } from 'vue'
      
      MoonFill.install = (app: App) => {
        app.component(MoonFill.name, MoonFill)
      }
      
      export default MoonFill
    