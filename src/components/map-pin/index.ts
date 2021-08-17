
      import MapPin from './Main.vue'
      import { App } from 'vue'
      
      MapPin.install = (app: App) => {
        app.component(MapPin.name, MapPin)
      }
      
      export default MapPin
    