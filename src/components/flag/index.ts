
      import Flag from './Main.vue'
      import { App } from 'vue'
      
      Flag.install = (app: App) => {
        app.component(Flag.name, Flag)
      }
      
      export default Flag
    