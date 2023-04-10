import path from 'node:path'

export function parseQuery<T>(url: string, defaultOptions?: T) {
  const search = new URLSearchParams(url)
  const o = Object.fromEntries(search.entries())
  return { ...defaultOptions, ...o } as T
}

export function parsePrefix(filepath: string) {
  return path.basename(filepath).replace('.svg', '')
}
