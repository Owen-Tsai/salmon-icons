
      import ThumbUpFill from './Main.vue'
      import { App } from 'vue'
      
      ThumbUpFill.install = (app: App) => {
        app.component(ThumbUpFill.name, ThumbUpFill)
      }
      
      export default ThumbUpFill
    