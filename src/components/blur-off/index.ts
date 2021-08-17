
      import BlurOff from './Main.vue'
      import { App } from 'vue'
      
      BlurOff.install = (app: App) => {
        app.component(BlurOff.name, BlurOff)
      }
      
      export default BlurOff
    