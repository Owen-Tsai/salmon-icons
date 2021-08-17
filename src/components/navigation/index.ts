
      import Navigation from './Main.vue'
      import { App } from 'vue'
      
      Navigation.install = (app: App) => {
        app.component(Navigation.name, Navigation)
      }
      
      export default Navigation
    