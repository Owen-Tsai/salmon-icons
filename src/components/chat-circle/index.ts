
      import ChatCircle from './Main.vue'
      import { App } from 'vue'
      
      ChatCircle.install = (app: App) => {
        app.component(ChatCircle.name, ChatCircle)
      }
      
      export default ChatCircle
    