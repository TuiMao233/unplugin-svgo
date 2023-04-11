import type { BuiltinsWithOptionalParams, BuiltinsWithRequiredParams } from 'svgo/plugins/plugins-types'
import type { Plugin } from 'svgo/lib/types'

export type PluginsParams = BuiltinsWithOptionalParams & BuiltinsWithRequiredParams
export type ExtendsPluginConfig<K extends keyof PluginsParams> = PluginsParams[K] & { fn?: Plugin<PluginsParams[K]> }

export type CustomPluginFn<T> = (params?: T) => { name: string; fn: Plugin<T>; params?: T }
