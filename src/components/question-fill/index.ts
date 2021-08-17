
      import QuestionFill from './Main.vue'
      import { App } from 'vue'
      
      QuestionFill.install = (app: App) => {
        app.component(QuestionFill.name, QuestionFill)
      }
      
      export default QuestionFill
    