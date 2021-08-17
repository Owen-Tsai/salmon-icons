
      import Text from './Main.vue'
      import { App } from 'vue'
      
      Text.install = (app: App) => {
        app.component(Text.name, Text)
      }
      
      export default Text
    