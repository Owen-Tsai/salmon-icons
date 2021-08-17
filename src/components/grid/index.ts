
      import Grid from './Main.vue'
      import { App } from 'vue'
      
      Grid.install = (app: App) => {
        app.component(Grid.name, Grid)
      }
      
      export default Grid
    