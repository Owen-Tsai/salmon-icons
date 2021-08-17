
      import Heading from './Main.vue'
      import { App } from 'vue'
      
      Heading.install = (app: App) => {
        app.component(Heading.name, Heading)
      }
      
      export default Heading
    