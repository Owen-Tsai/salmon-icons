
      import ListUnordered from './Main.vue'
      import { App } from 'vue'
      
      ListUnordered.install = (app: App) => {
        app.component(ListUnordered.name, ListUnordered)
      }
      
      export default ListUnordered
    