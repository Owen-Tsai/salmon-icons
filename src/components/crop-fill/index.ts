
      import CropFill from './Main.vue'
      import { App } from 'vue'
      
      CropFill.install = (app: App) => {
        app.component(CropFill.name, CropFill)
      }
      
      export default CropFill
    