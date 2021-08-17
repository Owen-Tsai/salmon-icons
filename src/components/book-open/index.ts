
      import BookOpen from './Main.vue'
      import { App } from 'vue'
      
      BookOpen.install = (app: App) => {
        app.component(BookOpen.name, BookOpen)
      }
      
      export default BookOpen
    