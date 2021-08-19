<h1 align="center">Salmon Icons</h1>
<p align="center">
  <img align="center" src="https://raw.githubusercontent.com/Owen-Tsai/salmon-icons/master/src/assets/salmon-icons-cover.png">
  <p align="center" color="gray">A tree-shakable icons library built for <a href="https://github.com/Owen-Tsai/salmon-ui">Salmon UI</a>.</p>
</p>

---

*`salmon-icons` requires Vue 3.*

## Install

```
yarn add salmon-icons
```

OR

```
npm install salmon-icons
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
