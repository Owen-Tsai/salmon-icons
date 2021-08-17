
      import Stack from './Main.vue'
      import { App } from 'vue'
      
      Stack.install = (app: App) => {
        app.component(Stack.name, Stack)
      }
      
      export default Stack
    