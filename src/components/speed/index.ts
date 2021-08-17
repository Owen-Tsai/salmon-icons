
      import Speed from './Main.vue'
      import { App } from 'vue'
      
      Speed.install = (app: App) => {
        app.component(Speed.name, Speed)
      }
      
      export default Speed
    