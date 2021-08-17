
      import FacebookFill from './Main.vue'
      import { App } from 'vue'
      
      FacebookFill.install = (app: App) => {
        app.component(FacebookFill.name, FacebookFill)
      }
      
      export default FacebookFill
    