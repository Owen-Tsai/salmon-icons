
      import Code from './Main.vue'
      import { App } from 'vue'
      
      Code.install = (app: App) => {
        app.component(Code.name, Code)
      }
      
      export default Code
    