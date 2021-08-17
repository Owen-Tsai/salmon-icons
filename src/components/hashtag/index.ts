
      import Hashtag from './Main.vue'
      import { App } from 'vue'
      
      Hashtag.install = (app: App) => {
        app.component(Hashtag.name, Hashtag)
      }
      
      export default Hashtag
    