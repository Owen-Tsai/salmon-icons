
      import ArchiveFill from './Main.vue'
      import { App } from 'vue'
      
      ArchiveFill.install = (app: App) => {
        app.component(ArchiveFill.name, ArchiveFill)
      }
      
      export default ArchiveFill
    