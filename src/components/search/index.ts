
      import Search from './Main.vue'
      import { App } from 'vue'
      
      Search.install = (app: App) => {
        app.component(Search.name, Search)
      }
      
      export default Search
    