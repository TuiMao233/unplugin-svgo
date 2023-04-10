/* eslint-disable @typescript-eslint/no-var-requires */
import path from 'node:path'
import fs from 'fs-extra'
import { createUnplugin } from 'unplugin'
import type { Options, SearchParams } from '../types'
import { optimizeSVG } from './optimize'
import { parseQuery } from './utils'

const { compileTemplate } = require('@vue/compiler-sfc')

export default createUnplugin<Options>((options = {}) => {
  const { optimize: optimizeConfig = {} } = options
  const suffix = /\.svg/
  return [
    {
      name: 'unplugin-svgo',
      async load(id) {
        if (!suffix.test(id))
          return

        const [filepath, query] = id.split('?')
        const prefix = path.basename(filepath).replace('.svg', '')

        const params = parseQuery<SearchParams>(query, {
          svgo: true,
        })

        let svg: string
        try {
          svg = await fs.readFile(filepath, 'utf-8')
        }
        catch (error) {
          console.warn('\n', `${id} couldn't be loaded by unplugin-svgo, fallback to default loader`)
          return
        }

        if (optimizeConfig.enable && params.svgo)
          svg = optimizeSVG(svg, { prefix, ...optimizeConfig })

        if (params.raw)
          return `export default ${JSON.stringify(svg)}`

        if (params.component === true || params.component === 'template') {
          const { code } = compileTemplate({
            id: JSON.stringify(id),
            source: svg,
            filename: path,
            transformAssetUrls: false,
          })
          return `${code}\nexport default { render: render }`
        }

        // TODO
        if (params.component === 'jsx')
          return `export default () => ${svg}`
      },
    },
  ]
})
