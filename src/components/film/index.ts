
      import Film from './Main.vue'
      import { App } from 'vue'
      
      Film.install = (app: App) => {
        app.component(Film.name, Film)
      }
      
      export default Film
    