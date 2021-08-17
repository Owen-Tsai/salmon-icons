
      import Xbox from './Main.vue'
      import { App } from 'vue'
      
      Xbox.install = (app: App) => {
        app.component(Xbox.name, Xbox)
      }
      
      export default Xbox
    