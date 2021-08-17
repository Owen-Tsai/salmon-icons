
      import SettingsFill from './Main.vue'
      import { App } from 'vue'
      
      SettingsFill.install = (app: App) => {
        app.component(SettingsFill.name, SettingsFill)
      }
      
      export default SettingsFill
    