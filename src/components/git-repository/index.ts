
      import GitRepository from './Main.vue'
      import { App } from 'vue'
      
      GitRepository.install = (app: App) => {
        app.component(GitRepository.name, GitRepository)
      }
      
      export default GitRepository
    