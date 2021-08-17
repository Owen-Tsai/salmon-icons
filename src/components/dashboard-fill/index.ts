
      import DashboardFill from './Main.vue'
      import { App } from 'vue'
      
      DashboardFill.install = (app: App) => {
        app.component(DashboardFill.name, DashboardFill)
      }
      
      export default DashboardFill
    