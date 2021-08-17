
      import FacebookBoxFill from './Main.vue'
      import { App } from 'vue'
      
      FacebookBoxFill.install = (app: App) => {
        app.component(FacebookBoxFill.name, FacebookBoxFill)
      }
      
      export default FacebookBoxFill
    