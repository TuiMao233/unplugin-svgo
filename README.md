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


## Configuration

SVGO has a plugin-based architecture, separate plugins allows various xml svg optimizations. See built-in plugins. SVGO automatically loads configuration from `svgo.config.js|ts|json`. Some general options can be configured via CLI.

```ts
import { defineConfig } from 'unplugin-svgo'
import { prefixIds, presetDefault, sortAttrs } from 'unplugin-svgo/plugins'

export default defineConfig({
  multipass: true, // boolean. false by default
  datauri: 'enc', // 'base64' (default), 'enc' or 'unenc'.
  plugins: [
    // set of built-in plugins enabled by default
    presetDefault(),
    // enable built-in plugins by name
    prefixIds(),
    // or by expanded notation which allows to configure plugin
    sortAttrs({
      xmlnsOrder: 'alphabetical',
    })
  ]
})
```

## Loaders

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

If you use `unplugin-svgo` in Typescript, you need to set the `tsconfig.json`

```json
{
  "compilerOptions": {
    "types": [
      "unplugin-svgo/client"
    ]
  }
}
```
