
      import Image from './Main.vue'
      import { App } from 'vue'
      
      Image.install = (app: App) => {
        app.component(Image.name, Image)
      }
      
      export default Image
    