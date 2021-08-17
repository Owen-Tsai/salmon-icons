
      import BriefcaseFill from './Main.vue'
      import { App } from 'vue'
      
      BriefcaseFill.install = (app: App) => {
        app.component(BriefcaseFill.name, BriefcaseFill)
      }
      
      export default BriefcaseFill
    