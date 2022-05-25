<h1 align="center">Salmon Icons</h1>
<p align="center">
  <img align="center" src="https://raw.githubusercontent.com/Owen-Tsai/salmon-icons/master/assets/banner.svg" alt="banner">
  <p align="center" color="gray">A tree-shakable icons library built for <a href="https://github.com/Owen-Tsai/salmon-ui">Salmon UI</a>.</p>
</p>

<!-- **A complete list of icons can be found here.** -->
**Link to the complete list of icons is temporarily unavailable**

*`salmon-icons` requires Vue 3*

> **NOTICE** Since version `1.0.5-beta2` <br> salmon-icons is now a scoped package under @salmon-ui. Please use @salmon-ui/icons instead.

## Install

```sh
npm install @salmon-ui/icons
```

OR

```sh
yarn add @salmon-ui/icons
```

## Usage

Local registration:

```vue
<template>
  <heart-fill />
  <close class="custom-class" />
</template>

<script lang="ts" setup>
import {
  HeartFill,
  Close
} from '@salmon-ui/icons'
</script>
```

Alternatively, you can import all icons and register them all via a loop.

Note that the icon name might be reserved in HTML, or has the same name as one of your component, or your code of conduct prohibits the usage of single-word custom tags. When dealing with such circumstances, remember to specify an alias.

```js
import {
  At as IconAt,
  UserFill
} from '@salmon-ui/icons'
```

## Development

Put all your source icons (*.svg) into the `icons` directory, then run:

```sh
npm run generate:sfc
```

to generate vue components in `packages` directory.

Run

```sh
npm run build
```

to build the library. Bundled files will be written into `dist` folder.

## Other Scripts

Build library without type declarations:

```sh
npm run build:sfc
```

Generate type declarations only:

```sh
npm run build:types
```
