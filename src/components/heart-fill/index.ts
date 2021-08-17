
      import HeartFill from './Main.vue'
      import { App } from 'vue'
      
      HeartFill.install = (app: App) => {
        app.component(HeartFill.name, HeartFill)
      }
      
      export default HeartFill
    