
      import ChatBoxFill from './Main.vue'
      import { App } from 'vue'
      
      ChatBoxFill.install = (app: App) => {
        app.component(ChatBoxFill.name, ChatBoxFill)
      }
      
      export default ChatBoxFill
    