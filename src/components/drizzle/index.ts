
      import Drizzle from './Main.vue'
      import { App } from 'vue'
      
      Drizzle.install = (app: App) => {
        app.component(Drizzle.name, Drizzle)
      }
      
      export default Drizzle
    