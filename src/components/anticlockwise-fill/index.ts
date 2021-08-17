
      import AnticlockwiseFill from './Main.vue'
      import { App } from 'vue'
      
      AnticlockwiseFill.install = (app: App) => {
        app.component(AnticlockwiseFill.name, AnticlockwiseFill)
      }
      
      export default AnticlockwiseFill
    