import type { Options } from 'tsup'

export const tsup: Options = {
  entry: [
    'src/*.ts',
  ],
  target: 'node14',
  format: ['cjs', 'esm'],
  dts: true,
  splitting: true,
  clean: true,
  shims: false,
}
