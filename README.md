<h1 align="center">Salmon Icons</h1>
<p align="center">
  <img align="center" src="https://raw.githubusercontent.com/Owen-Tsai/salmon-icons/master/src/assets/salmon-icons-cover.png">
  <p align="center" color="gray">A tree-shakable icons library built for <a href="https://github.com/Owen-Tsai/salmon-ui">Salmon UI</a>.</p>
</p>

---

*`salmon-icons` requires Vue 3. All icons listed [here](https://mmcai.top/salmon-icons/)*

> **NOTICE** Since version `1.0.5-beta2` <br> salmon-icons is now a scoped package under @salmon-ui. Please use @salmon-ui/icons instead.

## Install

```
yarn add @salmon-ui/icons
```

OR

```
npm install @salmon-ui/icons
```

## Usage

Local registration:

```vue
<template>
  <heart-fill></heart-fill>
  <close class="custom-class"></close>
</template>

<script>
  import { HeartFill, Close } from 'salmon-icons'

  export default {
    components: {
      HeartFill, Close
    }
  }
</script>
```

Global registration:

```js
import { 
  HeartFill, 
  Close
} from 'salmon-icons'

const app = Vue.createApp({})

app.component(HeartFill.name, HeartFill)
// or give it any name you like
app.component('times', Close)

app.mount('#app')
```

Although it's not recommended, you can register all components globally via a loop.

## Scripts

Generate vue components from svg sources:

```
yarn gen-components
```

Generate an entry file for all components, as well as a JSON file containing all component names and corresponding component directories.

```
yarn gen-components-list
```

Build the library:

```
yarn build
```

## Special Thanks

All scoped packages under @salmon-ui are built with [WebStorm](https://www.jetbrains.com/webstorm/). Open Source license provided by [JetBrains s.r.o](https://www.jetbrains.com/).

<p align="center">
  <img align="center" style="width: 120px;" src="https://resources.jetbrains.com/storage/products/company/brand/logos/jb_beam.png" alt="JetBrains Logo (Main) logo">
  <p align="center">Copyright © 2000-2021 JetBrains s.r.o. JetBrains and the JetBrains logo are registered trademarks of JetBrains s.r.o.</p>
</p>

<p align="center">
  <img align="center" style="width: 50%; min-width: 400px;" src="https://resources.jetbrains.com/storage/products/company/brand/logos/WebStorm.png" alt="WebStorm logo">
  <p align="center">Copyright © 2021 JetBrains s.r.o. WebStorm and the WebStorm logo are registered trademarks of JetBrains s.r.o.</p>
</p>


