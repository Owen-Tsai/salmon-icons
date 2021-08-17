
      import KeyFill from './Main.vue'
      import { App } from 'vue'
      
      KeyFill.install = (app: App) => {
        app.component(KeyFill.name, KeyFill)
      }
      
      export default KeyFill
    