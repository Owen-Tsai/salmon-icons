
      import Phone from './Main.vue'
      import { App } from 'vue'
      
      Phone.install = (app: App) => {
        app.component(Phone.name, Phone)
      }
      
      export default Phone
    