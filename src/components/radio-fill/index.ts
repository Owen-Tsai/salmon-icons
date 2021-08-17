
      import RadioFill from './Main.vue'
      import { App } from 'vue'
      
      RadioFill.install = (app: App) => {
        app.component(RadioFill.name, RadioFill)
      }
      
      export default RadioFill
    