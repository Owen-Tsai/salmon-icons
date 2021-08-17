
      import Time from './Main.vue'
      import { App } from 'vue'
      
      Time.install = (app: App) => {
        app.component(Time.name, Time)
      }
      
      export default Time
    