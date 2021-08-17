
      import FontSize from './Main.vue'
      import { App } from 'vue'
      
      FontSize.install = (app: App) => {
        app.component(FontSize.name, FontSize)
      }
      
      export default FontSize
    