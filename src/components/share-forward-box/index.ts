
      import ShareForwardBox from './Main.vue'
      import { App } from 'vue'
      
      ShareForwardBox.install = (app: App) => {
        app.component(ShareForwardBox.name, ShareForwardBox)
      }
      
      export default ShareForwardBox
    