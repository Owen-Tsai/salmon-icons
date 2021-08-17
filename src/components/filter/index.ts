
      import Filter from './Main.vue'
      import { App } from 'vue'
      
      Filter.install = (app: App) => {
        app.component(Filter.name, Filter)
      }
      
      export default Filter
    