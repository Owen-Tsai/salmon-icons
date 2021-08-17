
      import Strikethrough from './Main.vue'
      import { App } from 'vue'
      
      Strikethrough.install = (app: App) => {
        app.component(Strikethrough.name, Strikethrough)
      }
      
      export default Strikethrough
    