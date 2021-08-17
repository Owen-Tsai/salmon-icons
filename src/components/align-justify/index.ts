
      import AlignJustify from './Main.vue'
      import { App } from 'vue'
      
      AlignJustify.install = (app: App) => {
        app.component(AlignJustify.name, AlignJustify)
      }
      
      export default AlignJustify
    