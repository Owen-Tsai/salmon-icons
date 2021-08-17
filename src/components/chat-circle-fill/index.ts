
      import ChatCircleFill from './Main.vue'
      import { App } from 'vue'
      
      ChatCircleFill.install = (app: App) => {
        app.component(ChatCircleFill.name, ChatCircleFill)
      }
      
      export default ChatCircleFill
    