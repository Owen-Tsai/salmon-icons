
      import TabletFill from './Main.vue'
      import { App } from 'vue'
      
      TabletFill.install = (app: App) => {
        app.component(TabletFill.name, TabletFill)
      }
      
      export default TabletFill
    