
      import Printer from './Main.vue'
      import { App } from 'vue'
      
      Printer.install = (app: App) => {
        app.component(Printer.name, Printer)
      }
      
      export default Printer
    