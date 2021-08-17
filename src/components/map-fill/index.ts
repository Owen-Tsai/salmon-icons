
      import MapFill from './Main.vue'
      import { App } from 'vue'
      
      MapFill.install = (app: App) => {
        app.component(MapFill.name, MapFill)
      }
      
      export default MapFill
    