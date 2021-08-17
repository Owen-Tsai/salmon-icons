
      import Chrome from './Main.vue'
      import { App } from 'vue'
      
      Chrome.install = (app: App) => {
        app.component(Chrome.name, Chrome)
      }
      
      export default Chrome
    