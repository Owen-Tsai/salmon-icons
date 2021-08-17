
      import Speaker from './Main.vue'
      import { App } from 'vue'
      
      Speaker.install = (app: App) => {
        app.component(Speaker.name, Speaker)
      }
      
      export default Speaker
    