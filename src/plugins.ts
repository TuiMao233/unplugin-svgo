import type { PluginConfig } from 'svgo'
import type { ExtendsPluginConfig } from './core/types'
import { implementWithPlugin } from './core/utils'

export function presetDefault(config?: ExtendsPluginConfig<'preset-default'>): PluginConfig {
  return implementWithPlugin('preset-default', config)
}
export function addAttributesToSVGElement(config?: ExtendsPluginConfig<'addAttributesToSVGElement'>) {
  return implementWithPlugin('addAttributesToSVGElement', config)
}
export function addClassesToSVGElement(config?: ExtendsPluginConfig<'addClassesToSVGElement'>) {
  return implementWithPlugin('addClassesToSVGElement', config)
}
export function cleanupAttrs(config?: ExtendsPluginConfig<'cleanupAttrs'>) {
  return implementWithPlugin('cleanupAttrs', config)
}
export function cleanupEnableBackground(config?: ExtendsPluginConfig<'cleanupEnableBackground'>) {
  return implementWithPlugin('cleanupEnableBackground', config)
}
export function cleanupIds(config?: ExtendsPluginConfig<'cleanupIds'>) {
  return implementWithPlugin('cleanupIds', config)
}
export function cleanupListOfValues(config?: ExtendsPluginConfig<'cleanupListOfValues'>) {
  return implementWithPlugin('cleanupListOfValues', config)
}
export function cleanupNumericValues(config?: ExtendsPluginConfig<'cleanupNumericValues'>) {
  return implementWithPlugin('cleanupNumericValues', config)
}
export function collapseGroups(config?: ExtendsPluginConfig<'collapseGroups'>) {
  return implementWithPlugin('collapseGroups', config)
}
export function convertColors(config?: ExtendsPluginConfig<'convertColors'>) {
  return implementWithPlugin('convertColors', config)
}
export function convertEllipseToCircle(config?: ExtendsPluginConfig<'convertEllipseToCircle'>) {
  return implementWithPlugin('convertEllipseToCircle', config)
}
export function convertPathData(config?: ExtendsPluginConfig<'convertPathData'>) {
  return implementWithPlugin('convertPathData', config)
}
export function convertShapeToPath(config?: ExtendsPluginConfig<'convertShapeToPath'>) {
  return implementWithPlugin('convertShapeToPath', config)
}
export function convertStyleToAttrs(config?: ExtendsPluginConfig<'convertStyleToAttrs'>) {
  return implementWithPlugin('convertStyleToAttrs', config)
}
export function convertTransform(config?: ExtendsPluginConfig<'convertTransform'>) {
  return implementWithPlugin('convertTransform', config)
}
export function inlineStyles(config?: ExtendsPluginConfig<'inlineStyles'>) {
  return implementWithPlugin('inlineStyles', config)
}
export function mergePaths(config?: ExtendsPluginConfig<'mergePaths'>) {
  return implementWithPlugin('mergePaths', config)
}
export function mergeStyles(config?: ExtendsPluginConfig<'mergeStyles'>) {
  return implementWithPlugin('mergeStyles', config)
}
export function minifyStyles(config?: ExtendsPluginConfig<'minifyStyles'>) {
  return implementWithPlugin('minifyStyles', config)
}
export function moveElemsAttrsToGroup(config?: ExtendsPluginConfig<'moveElemsAttrsToGroup'>) {
  return implementWithPlugin('moveElemsAttrsToGroup', config)
}
export function moveGroupAttrsToElems(config?: ExtendsPluginConfig<'moveGroupAttrsToElems'>) {
  return implementWithPlugin('moveGroupAttrsToElems', config)
}
export function prefixIds(config?: ExtendsPluginConfig<'prefixIds'>) {
  return implementWithPlugin('prefixIds', config)
}
export function removeAttributesBySelector(config?: ExtendsPluginConfig<'removeAttributesBySelector'>) {
  return implementWithPlugin('removeAttributesBySelector', config)
}
export function removeAttrs(config?: ExtendsPluginConfig<'removeAttrs'>) {
  return implementWithPlugin('removeAttrs', config)
}
export function removeComments(config?: ExtendsPluginConfig<'removeComments'>) {
  return implementWithPlugin('removeComments', config)
}
export function removeDesc(config?: ExtendsPluginConfig<'removeDesc'>) {
  return implementWithPlugin('removeDesc', config)
}
export function removeDimensions(config?: ExtendsPluginConfig<'removeDimensions'>) {
  return implementWithPlugin('removeDimensions', config)
}
export function removeDoctype(config?: ExtendsPluginConfig<'removeDoctype'>) {
  return implementWithPlugin('removeDoctype', config)
}
export function removeEditorsNSData(config?: ExtendsPluginConfig<'removeEditorsNSData'>) {
  return implementWithPlugin('removeEditorsNSData', config)
}
export function removeElementsByAttr(config?: ExtendsPluginConfig<'removeElementsByAttr'>) {
  return implementWithPlugin('removeElementsByAttr', config)
}
export function removeEmptyAttrs(config?: ExtendsPluginConfig<'removeEmptyAttrs'>) {
  return implementWithPlugin('removeEmptyAttrs', config)
}
export function removeEmptyContainers(config?: ExtendsPluginConfig<'removeEmptyContainers'>) {
  return implementWithPlugin('removeEmptyContainers', config)
}
export function removeEmptyText(config?: ExtendsPluginConfig<'removeEmptyText'>) {
  return implementWithPlugin('removeEmptyText', config)
}
export function removeHiddenElems(config?: ExtendsPluginConfig<'removeHiddenElems'>) {
  return implementWithPlugin('removeHiddenElems', config)
}
export function removeMetadata(config?: ExtendsPluginConfig<'removeMetadata'>) {
  return implementWithPlugin('removeMetadata', config)
}
export function removeNonInheritableGroupAttrs(config?: ExtendsPluginConfig<'removeNonInheritableGroupAttrs'>) {
  return implementWithPlugin('removeNonInheritableGroupAttrs', config)
}
export function removeOffCanvasPaths(config?: ExtendsPluginConfig<'removeOffCanvasPaths'>) {
  return implementWithPlugin('removeOffCanvasPaths', config)
}
export function removeRasterImages(config?: ExtendsPluginConfig<'removeRasterImages'>) {
  return implementWithPlugin('removeRasterImages', config)
}
export function removeScriptElement(config?: ExtendsPluginConfig<'removeScriptElement'>) {
  return implementWithPlugin('removeScriptElement', config)
}
export function removeStyleElement(config?: ExtendsPluginConfig<'removeStyleElement'>) {
  return implementWithPlugin('removeStyleElement', config)
}
export function removeTitle(config?: ExtendsPluginConfig<'removeTitle'>) {
  return implementWithPlugin('removeTitle', config)
}
export function removeUnknownsAndDefaults(config?: ExtendsPluginConfig<'removeUnknownsAndDefaults'>) {
  return implementWithPlugin('removeUnknownsAndDefaults', config)
}
export function removeUnusedNS(config?: ExtendsPluginConfig<'removeUnusedNS'>) {
  return implementWithPlugin('removeUnusedNS', config)
}
export function removeUselessDefs(config?: ExtendsPluginConfig<'removeUselessDefs'>) {
  return implementWithPlugin('removeUselessDefs', config)
}
export function removeUselessStrokeAndFill(config?: ExtendsPluginConfig<'removeUselessStrokeAndFill'>) {
  return implementWithPlugin('removeUselessStrokeAndFill', config)
}
export function removeViewBox(config?: ExtendsPluginConfig<'removeViewBox'>) {
  return implementWithPlugin('removeViewBox', config)
}
export function removeXMLNS(config?: ExtendsPluginConfig<'removeXMLNS'>) {
  return implementWithPlugin('removeXMLNS', config)
}
export function removeXMLProcInst(config?: ExtendsPluginConfig<'removeXMLProcInst'>) {
  return implementWithPlugin('removeXMLProcInst', config)
}
export function reusePaths(config?: ExtendsPluginConfig<'reusePaths'>) {
  return implementWithPlugin('reusePaths', config)
}
export function sortAttrs(config?: ExtendsPluginConfig<'sortAttrs'>) {
  return implementWithPlugin('sortAttrs', config)
}
export function sortDefsChildren(config?: ExtendsPluginConfig<'sortDefsChildren'>) {
  return implementWithPlugin('sortDefsChildren', config)
}
