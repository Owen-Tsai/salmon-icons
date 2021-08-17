
      import Suitcase from './Main.vue'
      import { App } from 'vue'
      
      Suitcase.install = (app: App) => {
        app.component(Suitcase.name, Suitcase)
      }
      
      export default Suitcase
    