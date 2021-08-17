
      import Radio from './Main.vue'
      import { App } from 'vue'
      
      Radio.install = (app: App) => {
        app.component(Radio.name, Radio)
      }
      
      export default Radio
    