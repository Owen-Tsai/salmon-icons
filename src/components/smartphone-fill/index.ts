
      import SmartphoneFill from './Main.vue'
      import { App } from 'vue'
      
      SmartphoneFill.install = (app: App) => {
        app.component(SmartphoneFill.name, SmartphoneFill)
      }
      
      export default SmartphoneFill
    