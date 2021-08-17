
      import IndeterminateCircle from './Main.vue'
      import { App } from 'vue'
      
      IndeterminateCircle.install = (app: App) => {
        app.component(IndeterminateCircle.name, IndeterminateCircle)
      }
      
      export default IndeterminateCircle
    