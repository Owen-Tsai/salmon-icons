
      import Battery from './Main.vue'
      import { App } from 'vue'
      
      Battery.install = (app: App) => {
        app.component(Battery.name, Battery)
      }
      
      export default Battery
    