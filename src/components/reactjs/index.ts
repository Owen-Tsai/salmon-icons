
      import Reactjs from './Main.vue'
      import { App } from 'vue'
      
      Reactjs.install = (app: App) => {
        app.component(Reactjs.name, Reactjs)
      }
      
      export default Reactjs
    