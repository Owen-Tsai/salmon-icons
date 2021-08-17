
      import MapPinFill from './Main.vue'
      import { App } from 'vue'
      
      MapPinFill.install = (app: App) => {
        app.component(MapPinFill.name, MapPinFill)
      }
      
      export default MapPinFill
    