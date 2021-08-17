
      import ShowersFill from './Main.vue'
      import { App } from 'vue'
      
      ShowersFill.install = (app: App) => {
        app.component(ShowersFill.name, ShowersFill)
      }
      
      export default ShowersFill
    