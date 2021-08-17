
      import Cloud from './Main.vue'
      import { App } from 'vue'
      
      Cloud.install = (app: App) => {
        app.component(Cloud.name, Cloud)
      }
      
      export default Cloud
    