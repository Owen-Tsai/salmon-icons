
      import Book from './Main.vue'
      import { App } from 'vue'
      
      Book.install = (app: App) => {
        app.component(Book.name, Book)
      }
      
      export default Book
    