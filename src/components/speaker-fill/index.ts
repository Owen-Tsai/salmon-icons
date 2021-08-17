
      import SpeakerFill from './Main.vue'
      import { App } from 'vue'
      
      SpeakerFill.install = (app: App) => {
        app.component(SpeakerFill.name, SpeakerFill)
      }
      
      export default SpeakerFill
    