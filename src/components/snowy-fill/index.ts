
      import SnowyFill from './Main.vue'
      import { App } from 'vue'
      
      SnowyFill.install = (app: App) => {
        app.component(SnowyFill.name, SnowyFill)
      }
      
      export default SnowyFill
    