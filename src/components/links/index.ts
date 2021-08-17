
      import Links from './Main.vue'
      import { App } from 'vue'
      
      Links.install = (app: App) => {
        app.component(Links.name, Links)
      }
      
      export default Links
    