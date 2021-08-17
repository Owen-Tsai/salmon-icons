
      import Map from './Main.vue'
      import { App } from 'vue'
      
      Map.install = (app: App) => {
        app.component(Map.name, Map)
      }
      
      export default Map
    