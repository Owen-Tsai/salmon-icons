
      import Anchor from './Main.vue'
      import { App } from 'vue'
      
      Anchor.install = (app: App) => {
        app.component(Anchor.name, Anchor)
      }
      
      export default Anchor
    