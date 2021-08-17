
      import Computer from './Main.vue'
      import { App } from 'vue'
      
      Computer.install = (app: App) => {
        app.component(Computer.name, Computer)
      }
      
      export default Computer
    