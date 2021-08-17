
      import MoneyDollarCircle from './Main.vue'
      import { App } from 'vue'
      
      MoneyDollarCircle.install = (app: App) => {
        app.component(MoneyDollarCircle.name, MoneyDollarCircle)
      }
      
      export default MoneyDollarCircle
    