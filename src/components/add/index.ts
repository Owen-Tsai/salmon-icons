
      import Add from './Main.vue'
      import { App } from 'vue'
      
      Add.install = (app: App) => {
        app.component(Add.name, Add)
      }
      
      export default Add
    