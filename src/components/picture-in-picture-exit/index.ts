
      import PictureInPictureExit from './Main.vue'
      import { App } from 'vue'
      
      PictureInPictureExit.install = (app: App) => {
        app.component(PictureInPictureExit.name, PictureInPictureExit)
      }
      
      export default PictureInPictureExit
    