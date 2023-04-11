/* eslint-disable @typescript-eslint/no-var-requires */
import path from 'node:path'
import fs from 'fs-extra'
import { createUnplugin } from 'unplugin'
import type { Options, SearchParams } from '../types'
import { parseQuery } from './utils'
import { optimizeSVG } from './optimize'

const { compileTemplate } = require('@vue/compiler-sfc')

const suffix = /\.svg/

export default createUnplugin<Options>((options = {}) => {
  const { optimize = {} } = options

  return [
    {
      name: 'unplugin-svgo',
      async load(id) {
        if (!suffix.test(id))
          return

        const { filepath, params, prefix } = parsePathIds(id)

        let svg = await readSvgFile(id, filepath)

        if (!svg)
          return

        if (optimize.enable && params.svgo)
          svg = await optimizeSVG(svg, { prefix, ...optimize })

        if (params.raw)
          return compileRawModule(svg)

        if (params.component === true || params.component === 'template')
          return compileTemplateModule(id, svg, filepath)

        if (params.component === 'jsx')
          return compileJsxModule(svg)
      },
    },
  ]
})

function compileTemplateModule(id: string, svg: string, path: string) {
  const { code } = compileTemplate({
    id: JSON.stringify(id),
    source: svg,
    filename: path,
    transformAssetUrls: false,
  })
  return `${code}\nexport default { render: render }`
}

function compileRawModule(svg: string) {
  return `export default ${JSON.stringify(svg)}`
}

function compileJsxModule(svg: string) {
  // TODO
  return `export default () => ${svg}`
}

function parsePathIds(id: string) {
  const [filepath, query] = id.split('?')
  const prefix = path.basename(filepath).replace('.svg', '')
  const params = parseQuery<SearchParams>(query, {
    svgo: true,
  })
  return { filepath, prefix, params }
}

async function readSvgFile(id: string, filepath: string) {
  let svg = ''
  try {
    svg = await fs.readFile(filepath, 'utf-8')
  }
  catch (error) {
    console.warn('\n', `${id} couldn't be loaded by unplugin-svgo, fallback to default loader`)
  }
  return svg
}
