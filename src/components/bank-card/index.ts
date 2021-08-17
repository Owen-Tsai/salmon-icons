
      import BankCard from './Main.vue'
      import { App } from 'vue'
      
      BankCard.install = (app: App) => {
        app.component(BankCard.name, BankCard)
      }
      
      export default BankCard
    