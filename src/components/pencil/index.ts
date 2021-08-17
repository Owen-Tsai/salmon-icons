
      import Pencil from './Main.vue'
      import { App } from 'vue'
      
      Pencil.install = (app: App) => {
        app.component(Pencil.name, Pencil)
      }
      
      export default Pencil
    