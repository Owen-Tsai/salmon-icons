
      import SendPlaneFill from './Main.vue'
      import { App } from 'vue'
      
      SendPlaneFill.install = (app: App) => {
        app.component(SendPlaneFill.name, SendPlaneFill)
      }
      
      export default SendPlaneFill
    