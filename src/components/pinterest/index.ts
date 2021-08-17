
      import Pinterest from './Main.vue'
      import { App } from 'vue'
      
      Pinterest.install = (app: App) => {
        app.component(Pinterest.name, Pinterest)
      }
      
      export default Pinterest
    