
      import Alert from './Main.vue'
      import { App } from 'vue'
      
      Alert.install = (app: App) => {
        app.component(Alert.name, Alert)
      }
      
      export default Alert
    