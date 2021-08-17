
      import Key from './Main.vue'
      import { App } from 'vue'
      
      Key.install = (app: App) => {
        app.component(Key.name, Key)
      }
      
      export default Key
    