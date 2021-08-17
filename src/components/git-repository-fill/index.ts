
      import GitRepositoryFill from './Main.vue'
      import { App } from 'vue'
      
      GitRepositoryFill.install = (app: App) => {
        app.component(GitRepositoryFill.name, GitRepositoryFill)
      }
      
      export default GitRepositoryFill
    