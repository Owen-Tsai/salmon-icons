
      import Cast from './Main.vue'
      import { App } from 'vue'
      
      Cast.install = (app: App) => {
        app.component(Cast.name, Cast)
      }
      
      export default Cast
    