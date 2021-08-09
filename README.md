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

Although it is not recommanded, you can use salmon-icons via a `<script>` tag.

```html
<script src="path/to/salmon.min.js">
```

## Usage

Local registration:

```vue
<template>
  <heart-fill></heart-fill>
</template>

<script>
  import HeartFill from 'salmon-icons'

  export default {
    components: {
      HeartFill
    }
  }
</script>
```

Global registration:

```js
import HeartFill from 'salmon-icons'

const app = Vue.createApp({})

app.component('heart-fill', HeartFill)
```

## Scripts

Build vue components from svg icons:

```
yarn build:icons
```

Build seperated js files for each component:

```
yarn build:components
```

Build a full js file with all icons bundled altogether:

```
yarn build:full
```

Generate a map containing names and paths of each component:

```
yarn gen-component-list
```
