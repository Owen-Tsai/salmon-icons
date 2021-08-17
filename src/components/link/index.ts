
      import Link from './Main.vue'
      import { App } from 'vue'
      
      Link.install = (app: App) => {
        app.component(Link.name, Link)
      }
      
      export default Link
    