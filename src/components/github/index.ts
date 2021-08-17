
      import Github from './Main.vue'
      import { App } from 'vue'
      
      Github.install = (app: App) => {
        app.component(Github.name, Github)
      }
      
      export default Github
    