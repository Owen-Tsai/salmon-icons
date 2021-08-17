
      import PictureInPictureFill from './Main.vue'
      import { App } from 'vue'
      
      PictureInPictureFill.install = (app: App) => {
        app.component(PictureInPictureFill.name, PictureInPictureFill)
      }
      
      export default PictureInPictureFill
    