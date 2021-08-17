
      import FilterOff from './Main.vue'
      import { App } from 'vue'
      
      FilterOff.install = (app: App) => {
        app.component(FilterOff.name, FilterOff)
      }
      
      export default FilterOff
    