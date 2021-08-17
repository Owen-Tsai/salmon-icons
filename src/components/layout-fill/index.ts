
      import LayoutFill from './Main.vue'
      import { App } from 'vue'
      
      LayoutFill.install = (app: App) => {
        app.component(LayoutFill.name, LayoutFill)
      }
      
      export default LayoutFill
    