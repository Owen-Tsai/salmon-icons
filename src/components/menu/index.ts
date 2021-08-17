
      import Menu from './Main.vue'
      import { App } from 'vue'
      
      Menu.install = (app: App) => {
        app.component(Menu.name, Menu)
      }
      
      export default Menu
    