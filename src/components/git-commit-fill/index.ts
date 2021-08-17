
      import GitCommitFill from './Main.vue'
      import { App } from 'vue'
      
      GitCommitFill.install = (app: App) => {
        app.component(GitCommitFill.name, GitCommitFill)
      }
      
      export default GitCommitFill
    