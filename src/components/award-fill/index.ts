
      import AwardFill from './Main.vue'
      import { App } from 'vue'
      
      AwardFill.install = (app: App) => {
        app.component(AwardFill.name, AwardFill)
      }
      
      export default AwardFill
    