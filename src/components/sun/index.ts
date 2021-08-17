
      import Sun from './Main.vue'
      import { App } from 'vue'
      
      Sun.install = (app: App) => {
        app.component(Sun.name, Sun)
      }
      
      export default Sun
    