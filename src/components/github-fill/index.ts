
      import GithubFill from './Main.vue'
      import { App } from 'vue'
      
      GithubFill.install = (app: App) => {
        app.component(GithubFill.name, GithubFill)
      }
      
      export default GithubFill
    