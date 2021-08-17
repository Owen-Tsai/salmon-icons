
      import Shield from './Main.vue'
      import { App } from 'vue'
      
      Shield.install = (app: App) => {
        app.component(Shield.name, Shield)
      }
      
      export default Shield
    