
      import ImageFill from './Main.vue'
      import { App } from 'vue'
      
      ImageFill.install = (app: App) => {
        app.component(ImageFill.name, ImageFill)
      }
      
      export default ImageFill
    