
      import Briefcase from './Main.vue'
      import { App } from 'vue'
      
      Briefcase.install = (app: App) => {
        app.component(Briefcase.name, Briefcase)
      }
      
      export default Briefcase
    