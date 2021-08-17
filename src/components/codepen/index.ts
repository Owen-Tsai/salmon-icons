
      import Codepen from './Main.vue'
      import { App } from 'vue'
      
      Codepen.install = (app: App) => {
        app.component(Codepen.name, Codepen)
      }
      
      export default Codepen
    