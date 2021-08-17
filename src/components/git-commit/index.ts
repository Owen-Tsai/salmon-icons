
      import GitCommit from './Main.vue'
      import { App } from 'vue'
      
      GitCommit.install = (app: App) => {
        app.component(GitCommit.name, GitCommit)
      }
      
      export default GitCommit
    