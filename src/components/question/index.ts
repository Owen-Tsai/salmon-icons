
      import Question from './Main.vue'
      import { App } from 'vue'
      
      Question.install = (app: App) => {
        app.component(Question.name, Question)
      }
      
      export default Question
    