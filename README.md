# unplugin-svgo

[![NPM version](https://img.shields.io/npm/v/unplugin-svgo?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-svgo)

plugin to load and optimize SVG files as raw string. For the optimization SVGO is used.

###### Features

- ☕️ Simplify SVG icons with [SVGO](https://github.com/svg/svgo) and automatically add prefixes to avoid icon conflicts.
- 💚 Supports both Vue and React out-of-the-box.
- ✨ Supports both import components(Vue/React) or svg file.
- 🦾 Full TypeScript support.
- 😃 Works perfectly with [@unocss/preset-icons](https://unocss.dev/presets/icons) or [unplugin-icons](https://github.com/antfu/unplugin-icons).

## Installation

```sh
npm i unplugin-svgo -D
```


<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import Svgo from 'unplugin-svgo/vite'

export default defineConfig({
  plugins: [
    Svgo({ /* options */ }),
  ],
})
```

<br></details>



<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import Svgo from 'unplugin-svgo/rollup'

export default {
  plugins: [
    Svgo({ /* options */ }),
  ],
}
```

<br></details>



<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-svgo/webpack')({ /* options */ }),
  ],
}
```

<br></details>



<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-svgo/webpack')({ /* options */ }),
    ],
  },
}
```

<br></details>



<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from 'esbuild'

build({
  /* ... */
  plugins: [
    require('unplugin-svgo/esbuild')({
      /* options */
    }),
  ],
})
```

<br></details>

## Import params

### Raw

SVGs can be imported as strings using the ?raw suffix:

```js
import iconRaw from './my-icon.svg?raw'
// '<svg>...'
```

### Component

SVGs can be explicitly imported as components using the ?component suffix:

It can be specified to use the component type, which defaults to the template component. To use JSX, you can use `component=jsx`.

```js
import IconTempComponent1 from './my-icon.svg?component'
import IconTempComponent2 from './my-icon.svg?component=template'
import IconJsxComponent from './my-icon.svg?component=jsx'
```

## Skip SVGO helper

SVGO can be explicitly enable or disabled for one file by adding the `?svgo=[enable]` suffix:

```ts
import IconJsxComponent from './my-icon.svg?component=jsx&svgo=false'
```

## Unocss (preset-icons)

unplugin-svgo provides a custom loader for [@unocss/preset-icons](https://unocss.dev/presets/icons), which makes it easy to optimize icons for use in Unocss without the need to load unplugin-svgo.

> If you use [unplugin-icons](https://github.com/antfu/unplugin-icons), the FileSystemIconLoader still works on unplugin-icons.

```ts
import Icons from '@unocss/preset-icons'
import { FileSystemIconLoader } from 'unplugin-svgo/loaders'

const loader = FileSystemIconLoader('./src/assets/iconfonts', {
  /* options */
})

Unocss({
  presets: [
    Icons({
      collections: { custom: loader }
    })
  ]
})
```

Use:

```html
<!-- ./src/assets/iconfonts/user.svg -->
<div class="i-custom-user"></div>
```

## Use with TypeScript

If you use `unplugin-svgo` in Typescript, you need to set the `tsconfig. json`

```json
{
  "compilerOptions": {
    "types": [
      "unplugin-svgo/client"
    ]
  }
}
```