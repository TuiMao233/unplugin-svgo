import type { CustomIconLoader } from '@iconify/utils/lib/loader/types'
import { camelize, pascalize, snakelize } from '@iconify/utils/lib'
import type { Stats } from 'fs-extra'
import fs from 'fs-extra'
import type { OptimizeConfig } from './types'
import { optimizeSVG } from './core/optimize'

export function FileSystemIconLoader(dir: string, options: Omit<OptimizeConfig, 'enable'> = {}): CustomIconLoader {
  return async (name) => {
    const paths = [
      `${dir}/${name}.svg`,
      `${dir}/${camelize(name)}.svg`,
      `${dir}/${pascalize(name)}.svg`,
      `${dir}/${snakelize(name)}.svg`,
    ]
    let stat: Stats

    for (const path of paths) {
      try {
        stat = await fs.lstat(path)
      }
      catch (err) {
        continue
      }
      if (stat.isFile()) {
        let svg = await fs.readFile(path, 'utf-8')
        const cleanupIdx = svg.indexOf('<svg')
        if (cleanupIdx > 0)
          svg = svg.slice(cleanupIdx)

        return optimizeSVG(svg, {
          prefix: name,
          preset: options.preset ?? true,
          config: options.config,
        })
      }
    }
  }
}
