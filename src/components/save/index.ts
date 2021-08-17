
      import Save from './Main.vue'
      import { App } from 'vue'
      
      Save.install = (app: App) => {
        app.component(Save.name, Save)
      }
      
      export default Save
    