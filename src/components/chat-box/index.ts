
      import ChatBox from './Main.vue'
      import { App } from 'vue'
      
      ChatBox.install = (app: App) => {
        app.component(ChatBox.name, ChatBox)
      }
      
      export default ChatBox
    