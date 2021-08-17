
      import BankCardFill from './Main.vue'
      import { App } from 'vue'
      
      BankCardFill.install = (app: App) => {
        app.component(BankCardFill.name, BankCardFill)
      }
      
      export default BankCardFill
    