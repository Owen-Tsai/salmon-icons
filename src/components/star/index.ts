
      import Star from './Main.vue'
      import { App } from 'vue'
      
      Star.install = (app: App) => {
        app.component(Star.name, Star)
      }
      
      export default Star
    