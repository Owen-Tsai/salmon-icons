
      import GitBranch from './Main.vue'
      import { App } from 'vue'
      
      GitBranch.install = (app: App) => {
        app.component(GitBranch.name, GitBranch)
      }
      
      export default GitBranch
    