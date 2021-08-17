
      import DeleteBack from './Main.vue'
      import { App } from 'vue'
      
      DeleteBack.install = (app: App) => {
        app.component(DeleteBack.name, DeleteBack)
      }
      
      export default DeleteBack
    