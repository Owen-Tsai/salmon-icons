
      import BookFill from './Main.vue'
      import { App } from 'vue'
      
      BookFill.install = (app: App) => {
        app.component(BookFill.name, BookFill)
      }
      
      export default BookFill
    