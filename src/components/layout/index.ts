
      import Layout from './Main.vue'
      import { App } from 'vue'
      
      Layout.install = (app: App) => {
        app.component(Layout.name, Layout)
      }
      
      export default Layout
    