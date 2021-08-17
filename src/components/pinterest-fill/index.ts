
      import PinterestFill from './Main.vue'
      import { App } from 'vue'
      
      PinterestFill.install = (app: App) => {
        app.component(PinterestFill.name, PinterestFill)
      }
      
      export default PinterestFill
    