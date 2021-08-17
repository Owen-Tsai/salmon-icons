
      import RedPacket from './Main.vue'
      import { App } from 'vue'
      
      RedPacket.install = (app: App) => {
        app.component(RedPacket.name, RedPacket)
      }
      
      export default RedPacket
    