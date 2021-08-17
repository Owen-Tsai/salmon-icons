
      import EmotionNormal from './Main.vue'
      import { App } from 'vue'
      
      EmotionNormal.install = (app: App) => {
        app.component(EmotionNormal.name, EmotionNormal)
      }
      
      export default EmotionNormal
    