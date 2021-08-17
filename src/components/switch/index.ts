
      import Switch from './Main.vue'
      import { App } from 'vue'
      
      Switch.install = (app: App) => {
        app.component(Switch.name, Switch)
      }
      
      export default Switch
    