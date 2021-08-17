
      import ShieldFill from './Main.vue'
      import { App } from 'vue'
      
      ShieldFill.install = (app: App) => {
        app.component(ShieldFill.name, ShieldFill)
      }
      
      export default ShieldFill
    