
      import Global from './Main.vue'
      import { App } from 'vue'
      
      Global.install = (app: App) => {
        app.component(Global.name, Global)
      }
      
      export default Global
    