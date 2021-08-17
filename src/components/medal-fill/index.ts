
      import MedalFill from './Main.vue'
      import { App } from 'vue'
      
      MedalFill.install = (app: App) => {
        app.component(MedalFill.name, MedalFill)
      }
      
      export default MedalFill
    