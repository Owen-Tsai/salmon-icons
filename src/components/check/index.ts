
      import Check from './Main.vue'
      import { App } from 'vue'
      
      Check.install = (app: App) => {
        app.component(Check.name, Check)
      }
      
      export default Check
    