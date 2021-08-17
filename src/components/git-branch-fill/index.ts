
      import GitBranchFill from './Main.vue'
      import { App } from 'vue'
      
      GitBranchFill.install = (app: App) => {
        app.component(GitBranchFill.name, GitBranchFill)
      }
      
      export default GitBranchFill
    