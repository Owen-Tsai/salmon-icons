
      import Earth from './Main.vue'
      import { App } from 'vue'
      
      Earth.install = (app: App) => {
        app.component(Earth.name, Earth)
      }
      
      export default Earth
    