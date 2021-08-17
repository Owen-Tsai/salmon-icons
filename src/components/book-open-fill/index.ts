
      import BookOpenFill from './Main.vue'
      import { App } from 'vue'
      
      BookOpenFill.install = (app: App) => {
        app.component(BookOpenFill.name, BookOpenFill)
      }
      
      export default BookOpenFill
    