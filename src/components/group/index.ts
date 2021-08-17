
      import Group from './Main.vue'
      import { App } from 'vue'
      
      Group.install = (app: App) => {
        app.component(Group.name, Group)
      }
      
      export default Group
    