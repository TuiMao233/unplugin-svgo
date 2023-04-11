/* eslint-disable @typescript-eslint/no-use-before-define */
import type { Config, PluginConfig } from 'svgo'
import { loadConfig } from 'unconfig'
import { defu } from 'defu'

export function defineConfig(config: Config) {
  return config
}

export async function mergePresetConfig(preset: boolean, config: Config = {}) {
  config = defu(config, await loadCwdConfig())

  if (preset)
    config = defu(config, { multipass: true, plugins: defaultPlugins })
  if (!config.plugins)
    config.plugins = []
  return config as Config & { plugins: PluginConfig[] }
}

let config: Config

export async function loadCwdConfig() {
  if (config)
    return config

  const { config: _config } = await loadConfig<Config>({
    sources: {
      files: 'svgo.config',
    },
  })

  return config = _config || {}
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
