
      import Cup from './Main.vue'
      import { App } from 'vue'
      
      Cup.install = (app: App) => {
        app.component(Cup.name, Cup)
      }
      
      export default Cup
    