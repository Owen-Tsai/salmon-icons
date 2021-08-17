
      import Bold from './Main.vue'
      import { App } from 'vue'
      
      Bold.install = (app: App) => {
        app.component(Bold.name, Bold)
      }
      
      export default Bold
    