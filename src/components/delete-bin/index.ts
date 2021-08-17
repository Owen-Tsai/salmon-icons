
      import DeleteBin from './Main.vue'
      import { App } from 'vue'
      
      DeleteBin.install = (app: App) => {
        app.component(DeleteBin.name, DeleteBin)
      }
      
      export default DeleteBin
    