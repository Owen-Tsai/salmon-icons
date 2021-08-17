
      import Gitlab from './Main.vue'
      import { App } from 'vue'
      
      Gitlab.install = (app: App) => {
        app.component(Gitlab.name, Gitlab)
      }
      
      export default Gitlab
    