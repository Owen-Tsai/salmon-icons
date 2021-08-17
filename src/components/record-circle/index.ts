
      import RecordCircle from './Main.vue'
      import { App } from 'vue'
      
      RecordCircle.install = (app: App) => {
        app.component(RecordCircle.name, RecordCircle)
      }
      
      export default RecordCircle
    