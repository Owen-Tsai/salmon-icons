
      import Slack from './Main.vue'
      import { App } from 'vue'
      
      Slack.install = (app: App) => {
        app.component(Slack.name, Slack)
      }
      
      export default Slack
    