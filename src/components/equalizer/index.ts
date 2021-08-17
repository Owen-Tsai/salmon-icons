
      import Equalizer from './Main.vue'
      import { App } from 'vue'
      
      Equalizer.install = (app: App) => {
        app.component(Equalizer.name, Equalizer)
      }
      
      export default Equalizer
    