
      import EmotionHappy from './Main.vue'
      import { App } from 'vue'
      
      EmotionHappy.install = (app: App) => {
        app.component(EmotionHappy.name, EmotionHappy)
      }
      
      export default EmotionHappy
    