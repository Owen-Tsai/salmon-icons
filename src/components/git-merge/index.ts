
      import GitMerge from './Main.vue'
      import { App } from 'vue'
      
      GitMerge.install = (app: App) => {
        app.component(GitMerge.name, GitMerge)
      }
      
      export default GitMerge
    