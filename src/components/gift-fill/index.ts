
      import GiftFill from './Main.vue'
      import { App } from 'vue'
      
      GiftFill.install = (app: App) => {
        app.component(GiftFill.name, GiftFill)
      }
      
      export default GiftFill
    