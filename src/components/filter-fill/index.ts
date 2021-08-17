
      import FilterFill from './Main.vue'
      import { App } from 'vue'
      
      FilterFill.install = (app: App) => {
        app.component(FilterFill.name, FilterFill)
      }
      
      export default FilterFill
    