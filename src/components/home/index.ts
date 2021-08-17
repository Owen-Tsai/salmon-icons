
      import Home from './Main.vue'
      import { App } from 'vue'
      
      Home.install = (app: App) => {
        app.component(Home.name, Home)
      }
      
      export default Home
    