
      import Shuffle from './Main.vue'
      import { App } from 'vue'
      
      Shuffle.install = (app: App) => {
        app.component(Shuffle.name, Shuffle)
      }
      
      export default Shuffle
    