
      import Vuejs from './Main.vue'
      import { App } from 'vue'
      
      Vuejs.install = (app: App) => {
        app.component(Vuejs.name, Vuejs)
      }
      
      export default Vuejs
    