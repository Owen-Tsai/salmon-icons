
      import Toggle from './Main.vue'
      import { App } from 'vue'
      
      Toggle.install = (app: App) => {
        app.component(Toggle.name, Toggle)
      }
      
      export default Toggle
    