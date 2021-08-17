
      import At from './Main.vue'
      import { App } from 'vue'
      
      At.install = (app: App) => {
        app.component(At.name, At)
      }
      
      export default At
    