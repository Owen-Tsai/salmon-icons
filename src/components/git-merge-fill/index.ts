
      import GitMergeFill from './Main.vue'
      import { App } from 'vue'
      
      GitMergeFill.install = (app: App) => {
        app.component(GitMergeFill.name, GitMergeFill)
      }
      
      export default GitMergeFill
    