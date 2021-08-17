
      import CodeSSlash from './Main.vue'
      import { App } from 'vue'
      
      CodeSSlash.install = (app: App) => {
        app.component(CodeSSlash.name, CodeSSlash)
      }
      
      export default CodeSSlash
    