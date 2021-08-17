
      import EmotionNormalFill from './Main.vue'
      import { App } from 'vue'
      
      EmotionNormalFill.install = (app: App) => {
        app.component(EmotionNormalFill.name, EmotionNormalFill)
      }
      
      export default EmotionNormalFill
    