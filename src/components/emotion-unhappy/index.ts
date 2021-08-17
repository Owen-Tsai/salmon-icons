
      import EmotionUnhappy from './Main.vue'
      import { App } from 'vue'
      
      EmotionUnhappy.install = (app: App) => {
        app.component(EmotionUnhappy.name, EmotionUnhappy)
      }
      
      export default EmotionUnhappy
    