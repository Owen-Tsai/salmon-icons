
      import ChromeFill from './Main.vue'
      import { App } from 'vue'
      
      ChromeFill.install = (app: App) => {
        app.component(ChromeFill.name, ChromeFill)
      }
      
      export default ChromeFill
    