
      import EmotionHappyFill from './Main.vue'
      import { App } from 'vue'
      
      EmotionHappyFill.install = (app: App) => {
        app.component(EmotionHappyFill.name, EmotionHappyFill)
      }
      
      export default EmotionHappyFill
    