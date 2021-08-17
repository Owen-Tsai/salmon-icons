
      import MoneyCnyCircle from './Main.vue'
      import { App } from 'vue'
      
      MoneyCnyCircle.install = (app: App) => {
        app.component(MoneyCnyCircle.name, MoneyCnyCircle)
      }
      
      export default MoneyCnyCircle
    