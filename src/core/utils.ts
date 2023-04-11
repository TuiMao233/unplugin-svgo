import path from 'node:path'
import type { PluginConfig } from 'svgo'
import type { Plugin } from 'svgo/lib/types'
import type { CustomPluginFn, ExtendsPluginConfig, PluginsParams } from './types'

export function parseQuery<T>(url: string, defaultOptions?: T) {
  const search = new URLSearchParams(url)
  const o = Object.fromEntries(search.entries())
  return { ...defaultOptions, ...o } as T
}

export function parsePrefix(filepath: string) {
  return path.basename(filepath).replace('.svg', '')
}

export function implementWithPlugin<K extends keyof PluginsParams>(key: K, config?: ExtendsPluginConfig<K>): PluginConfig {
  const { fn, ...params } = (config || {}) as any
  return { name: key, fn: fn as any, params } as any
}

export function definePlugin<T>(name: string, fn: Plugin<T>): CustomPluginFn<T> {
  return (params?: T) => ({ name, fn, params })
}
