
      import AlignRight from './Main.vue'
      import { App } from 'vue'
      
      AlignRight.install = (app: App) => {
        app.component(AlignRight.name, AlignRight)
      }
      
      export default AlignRight
    