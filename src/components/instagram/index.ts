
      import Instagram from './Main.vue'
      import { App } from 'vue'
      
      Instagram.install = (app: App) => {
        app.component(Instagram.name, Instagram)
      }
      
      export default Instagram
    