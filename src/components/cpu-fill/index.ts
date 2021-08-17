
      import CpuFill from './Main.vue'
      import { App } from 'vue'
      
      CpuFill.install = (app: App) => {
        app.component(CpuFill.name, CpuFill)
      }
      
      export default CpuFill
    