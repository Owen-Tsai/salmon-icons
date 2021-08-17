
      import RepeatOne from './Main.vue'
      import { App } from 'vue'
      
      RepeatOne.install = (app: App) => {
        app.component(RepeatOne.name, RepeatOne)
      }
      
      export default RepeatOne
    