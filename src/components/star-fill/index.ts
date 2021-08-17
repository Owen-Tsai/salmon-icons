
      import StarFill from './Main.vue'
      import { App } from 'vue'
      
      StarFill.install = (app: App) => {
        app.component(StarFill.name, StarFill)
      }
      
      export default StarFill
    