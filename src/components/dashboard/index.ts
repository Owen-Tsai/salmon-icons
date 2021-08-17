
      import Dashboard from './Main.vue'
      import { App } from 'vue'
      
      Dashboard.install = (app: App) => {
        app.component(Dashboard.name, Dashboard)
      }
      
      export default Dashboard
    