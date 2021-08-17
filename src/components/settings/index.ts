
      import Settings from './Main.vue'
      import { App } from 'vue'
      
      Settings.install = (app: App) => {
        app.component(Settings.name, Settings)
      }
      
      export default Settings
    