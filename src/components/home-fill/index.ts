
      import HomeFill from './Main.vue'
      import { App } from 'vue'
      
      HomeFill.install = (app: App) => {
        app.component(HomeFill.name, HomeFill)
      }
      
      export default HomeFill
    