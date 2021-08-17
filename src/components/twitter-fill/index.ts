
      import TwitterFill from './Main.vue'
      import { App } from 'vue'
      
      TwitterFill.install = (app: App) => {
        app.component(TwitterFill.name, TwitterFill)
      }
      
      export default TwitterFill
    