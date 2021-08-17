
      import Headphone from './Main.vue'
      import { App } from 'vue'
      
      Headphone.install = (app: App) => {
        app.component(Headphone.name, Headphone)
      }
      
      export default Headphone
    