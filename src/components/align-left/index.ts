
      import AlignLeft from './Main.vue'
      import { App } from 'vue'
      
      AlignLeft.install = (app: App) => {
        app.component(AlignLeft.name, AlignLeft)
      }
      
      export default AlignLeft
    