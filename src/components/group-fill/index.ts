
      import GroupFill from './Main.vue'
      import { App } from 'vue'
      
      GroupFill.install = (app: App) => {
        app.component(GroupFill.name, GroupFill)
      }
      
      export default GroupFill
    