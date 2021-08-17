
      import ThumbDown from './Main.vue'
      import { App } from 'vue'
      
      ThumbDown.install = (app: App) => {
        app.component(ThumbDown.name, ThumbDown)
      }
      
      export default ThumbDown
    