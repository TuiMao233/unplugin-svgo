import type { Config as _OptimizeConfig } from 'svgo'

export interface OptimizeConfig {
  enable?: boolean
  preset?: boolean
  config?: Omit<_OptimizeConfig, 'path'>
}

export interface Options {
  optimize?: OptimizeConfig
}

export interface SearchParams {
  svgo?: boolean
  raw?: boolean
  component?: 'jsx' | 'template' | boolean
}
