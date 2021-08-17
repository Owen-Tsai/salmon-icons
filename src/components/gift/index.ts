
      import Gift from './Main.vue'
      import { App } from 'vue'
      
      Gift.install = (app: App) => {
        app.component(Gift.name, Gift)
      }
      
      export default Gift
    