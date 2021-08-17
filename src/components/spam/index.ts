
      import Spam from './Main.vue'
      import { App } from 'vue'
      
      Spam.install = (app: App) => {
        app.component(Spam.name, Spam)
      }
      
      export default Spam
    