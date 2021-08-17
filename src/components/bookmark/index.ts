
      import Bookmark from './Main.vue'
      import { App } from 'vue'
      
      Bookmark.install = (app: App) => {
        app.component(Bookmark.name, Bookmark)
      }
      
      export default Bookmark
    