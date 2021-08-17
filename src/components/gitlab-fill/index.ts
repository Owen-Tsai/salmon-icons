
      import GitlabFill from './Main.vue'
      import { App } from 'vue'
      
      GitlabFill.install = (app: App) => {
        app.component(GitlabFill.name, GitlabFill)
      }
      
      export default GitlabFill
    