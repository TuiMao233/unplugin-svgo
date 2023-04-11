import type { Config } from 'svgo'
import { optimize as _optimize } from 'svgo'
import { mergePresetConfig } from './config'

export interface OptimizeOptions {
  preset?: boolean
  prefix?: string
  config?: Config
}

export async function optimizeSVG(svg: string, options: OptimizeOptions = {}) {
  const { prefix, preset = true } = options

  const monochrome = patch('fill', svg) + patch('stop-color', svg) === 1
  const config = await mergePresetConfig(preset, options.config)

  if (preset && prefix)
    config.plugins.push({ name: 'prefixIds', params: { prefix } })

  if (preset && monochrome)
    config.plugins.push({ name: 'convertColors', params: { currentColor: true } })

  return _optimize(svg, config).data
}

export function patch(re: string, s: string) {
  return s.split(re).length - 1
}
