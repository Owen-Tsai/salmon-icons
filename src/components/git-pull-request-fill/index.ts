
      import GitPullRequestFill from './Main.vue'
      import { App } from 'vue'
      
      GitPullRequestFill.install = (app: App) => {
        app.component(GitPullRequestFill.name, GitPullRequestFill)
      }
      
      export default GitPullRequestFill
    