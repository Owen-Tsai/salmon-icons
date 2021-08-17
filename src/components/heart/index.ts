
      import Heart from './Main.vue'
      import { App } from 'vue'
      
      Heart.install = (app: App) => {
        app.component(Heart.name, Heart)
      }
      
      export default Heart
    