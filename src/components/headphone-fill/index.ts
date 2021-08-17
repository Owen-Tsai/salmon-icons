
      import HeadphoneFill from './Main.vue'
      import { App } from 'vue'
      
      HeadphoneFill.install = (app: App) => {
        app.component(HeadphoneFill.name, HeadphoneFill)
      }
      
      export default HeadphoneFill
    