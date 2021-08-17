
      import GitPullRequest from './Main.vue'
      import { App } from 'vue'
      
      GitPullRequest.install = (app: App) => {
        app.component(GitPullRequest.name, GitPullRequest)
      }
      
      export default GitPullRequest
    