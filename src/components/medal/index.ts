
      import Medal from './Main.vue'
      import { App } from 'vue'
      
      Medal.install = (app: App) => {
        app.component(Medal.name, Medal)
      }
      
      export default Medal
    