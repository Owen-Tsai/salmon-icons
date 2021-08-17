
      import ThumbUp from './Main.vue'
      import { App } from 'vue'
      
      ThumbUp.install = (app: App) => {
        app.component(ThumbUp.name, ThumbUp)
      }
      
      export default ThumbUp
    