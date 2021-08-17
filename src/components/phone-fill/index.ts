
      import PhoneFill from './Main.vue'
      import { App } from 'vue'
      
      PhoneFill.install = (app: App) => {
        app.component(PhoneFill.name, PhoneFill)
      }
      
      export default PhoneFill
    