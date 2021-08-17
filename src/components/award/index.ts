
      import Award from './Main.vue'
      import { App } from 'vue'
      
      Award.install = (app: App) => {
        app.component(Award.name, Award)
      }
      
      export default Award
    