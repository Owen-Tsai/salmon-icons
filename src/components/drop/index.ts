
      import Drop from './Main.vue'
      import { App } from 'vue'
      
      Drop.install = (app: App) => {
        app.component(Drop.name, Drop)
      }
      
      export default Drop
    