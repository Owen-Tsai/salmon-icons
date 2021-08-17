
      import BookmarkFill from './Main.vue'
      import { App } from 'vue'
      
      BookmarkFill.install = (app: App) => {
        app.component(BookmarkFill.name, BookmarkFill)
      }
      
      export default BookmarkFill
    