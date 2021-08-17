
      import Crop from './Main.vue'
      import { App } from 'vue'
      
      Crop.install = (app: App) => {
        app.component(Crop.name, Crop)
      }
      
      export default Crop
    