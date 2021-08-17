
      import DrizzleFill from './Main.vue'
      import { App } from 'vue'
      
      DrizzleFill.install = (app: App) => {
        app.component(DrizzleFill.name, DrizzleFill)
      }
      
      export default DrizzleFill
    