
      import CloseCircle from './Main.vue'
      import { App } from 'vue'
      
      CloseCircle.install = (app: App) => {
        app.component(CloseCircle.name, CloseCircle)
      }
      
      export default CloseCircle
    