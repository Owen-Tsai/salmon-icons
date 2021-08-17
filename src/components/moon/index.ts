
      import Moon from './Main.vue'
      import { App } from 'vue'
      
      Moon.install = (app: App) => {
        app.component(Moon.name, Moon)
      }
      
      export default Moon
    