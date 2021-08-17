
      import EqualizerFill from './Main.vue'
      import { App } from 'vue'
      
      EqualizerFill.install = (app: App) => {
        app.component(EqualizerFill.name, EqualizerFill)
      }
      
      export default EqualizerFill
    