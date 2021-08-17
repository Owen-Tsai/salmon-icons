
      import GridFill from './Main.vue'
      import { App } from 'vue'
      
      GridFill.install = (app: App) => {
        app.component(GridFill.name, GridFill)
      }
      
      export default GridFill
    