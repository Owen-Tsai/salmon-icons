
      import LoginBox from './Main.vue'
      import { App } from 'vue'
      
      LoginBox.install = (app: App) => {
        app.component(LoginBox.name, LoginBox)
      }
      
      export default LoginBox
    