
      import FilmFill from './Main.vue'
      import { App } from 'vue'
      
      FilmFill.install = (app: App) => {
        app.component(FilmFill.name, FilmFill)
      }
      
      export default FilmFill
    