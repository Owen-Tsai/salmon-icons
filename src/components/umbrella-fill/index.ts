
      import UmbrellaFill from './Main.vue'
      import { App } from 'vue'
      
      UmbrellaFill.install = (app: App) => {
        app.component(UmbrellaFill.name, UmbrellaFill)
      }
      
      export default UmbrellaFill
    