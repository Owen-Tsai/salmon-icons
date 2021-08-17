
      import SearchFill from './Main.vue'
      import { App } from 'vue'
      
      SearchFill.install = (app: App) => {
        app.component(SearchFill.name, SearchFill)
      }
      
      export default SearchFill
    