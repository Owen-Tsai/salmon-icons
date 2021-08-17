
      import DropFill from './Main.vue'
      import { App } from 'vue'
      
      DropFill.install = (app: App) => {
        app.component(DropFill.name, DropFill)
      }
      
      export default DropFill
    