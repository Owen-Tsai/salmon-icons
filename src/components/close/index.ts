
      import Close from './Main.vue'
      import { App } from 'vue'
      
      Close.install = (app: App) => {
        app.component(Close.name, Close)
      }
      
      export default Close
    