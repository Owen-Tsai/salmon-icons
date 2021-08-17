
      import PenNib from './Main.vue'
      import { App } from 'vue'
      
      PenNib.install = (app: App) => {
        app.component(PenNib.name, PenNib)
      }
      
      export default PenNib
    