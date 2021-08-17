
      import PictureInPicture from './Main.vue'
      import { App } from 'vue'
      
      PictureInPicture.install = (app: App) => {
        app.component(PictureInPicture.name, PictureInPicture)
      }
      
      export default PictureInPicture
    