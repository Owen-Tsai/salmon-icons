
      import Cpu from './Main.vue'
      import { App } from 'vue'
      
      Cpu.install = (app: App) => {
        app.component(Cpu.name, Cpu)
      }
      
      export default Cpu
    