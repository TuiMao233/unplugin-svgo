/* eslint-disable @typescript-eslint/no-use-before-define */
import type { Config, PluginConfig } from 'svgo'
import { optimize as _optimize } from 'svgo'

export interface OptimizeOptions {
  preset?: boolean
  prefix?: string
  config?: Config
}

export function optimizeSVG(svg: string, options: OptimizeOptions = {}) {
  let { config = { }, prefix, preset = true } = options

  if (preset)
    config = { multipass: true, plugins: defaultPlugins, ...config }

  if (!config.plugins)
    config.plugins = []

  if (preset && prefix)
    config.plugins.push({ name: 'prefixIds', params: { prefix } })

  const polychrome = patch('fill', svg) + patch('stop-color', svg) === 1

  if (preset && polychrome)
    config.plugins.push({ name: 'convertColors', params: { currentColor: true } })

  return _optimize(svg, config).data
}

export const defaultPlugins: PluginConfig[] = [
  'removeDoctype',
  'removeXMLProcInst',
  'removeComments',
  'removeMetadata',
  'removeEditorsNSData',
  'cleanupAttrs',
  'mergeStyles',
  'inlineStyles',
  'minifyStyles',
  'cleanupIds',
  'removeUselessDefs',
  'cleanupNumericValues',
  'convertColors',
  'removeUnknownsAndDefaults',
  'removeNonInheritableGroupAttrs',
  'removeUselessStrokeAndFill',
  'cleanupEnableBackground',
  'removeHiddenElems',
  'removeEmptyText',
  'convertShapeToPath',
  'convertEllipseToCircle',
  'moveElemsAttrsToGroup',
  'moveGroupAttrsToElems',
  'collapseGroups',
  'convertPathData',
  'convertTransform',
  'removeEmptyAttrs',
  'removeEmptyContainers',
  'mergePaths',
  'removeUnusedNS',
  'sortDefsChildren',
  'removeTitle',
  'removeDesc',
]

export function patch(re: string, s: string) {
  return s.split(re).length - 1
}
