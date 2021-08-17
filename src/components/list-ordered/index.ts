
      import ListOrdered from './Main.vue'
      import { App } from 'vue'
      
      ListOrdered.install = (app: App) => {
        app.component(ListOrdered.name, ListOrdered)
      }
      
      export default ListOrdered
    