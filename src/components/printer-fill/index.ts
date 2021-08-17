
      import PrinterFill from './Main.vue'
      import { App } from 'vue'
      
      PrinterFill.install = (app: App) => {
        app.component(PrinterFill.name, PrinterFill)
      }
      
      export default PrinterFill
    