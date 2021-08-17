
      import Twitter from './Main.vue'
      import { App } from 'vue'
      
      Twitter.install = (app: App) => {
        app.component(Twitter.name, Twitter)
      }
      
      export default Twitter
    