
      import DragMove from './Main.vue'
      import { App } from 'vue'
      
      DragMove.install = (app: App) => {
        app.component(DragMove.name, DragMove)
      }
      
      export default DragMove
    