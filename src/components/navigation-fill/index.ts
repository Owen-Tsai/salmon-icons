
      import NavigationFill from './Main.vue'
      import { App } from 'vue'
      
      NavigationFill.install = (app: App) => {
        app.component(NavigationFill.name, NavigationFill)
      }
      
      export default NavigationFill
    