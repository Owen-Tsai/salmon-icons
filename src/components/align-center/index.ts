
      import AlignCenter from './Main.vue'
      import { App } from 'vue'
      
      AlignCenter.install = (app: App) => {
        app.component(AlignCenter.name, AlignCenter)
      }
      
      export default AlignCenter
    