
      import VuejsFill from './Main.vue'
      import { App } from 'vue'
      
      VuejsFill.install = (app: App) => {
        app.component(VuejsFill.name, VuejsFill)
      }
      
      export default VuejsFill
    