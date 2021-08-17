
      import ShieldCheck from './Main.vue'
      import { App } from 'vue'
      
      ShieldCheck.install = (app: App) => {
        app.component(ShieldCheck.name, ShieldCheck)
      }
      
      export default ShieldCheck
    