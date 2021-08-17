
      import Information from './Main.vue'
      import { App } from 'vue'
      
      Information.install = (app: App) => {
        app.component(Information.name, Information)
      }
      
      export default Information
    