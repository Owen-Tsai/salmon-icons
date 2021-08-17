
      import RedPacketFill from './Main.vue'
      import { App } from 'vue'
      
      RedPacketFill.install = (app: App) => {
        app.component(RedPacketFill.name, RedPacketFill)
      }
      
      export default RedPacketFill
    