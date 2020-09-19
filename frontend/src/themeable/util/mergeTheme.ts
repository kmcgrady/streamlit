import { Theme } from "../types"

export function mergeTheme(
  theme: Theme,
  ...themeOverrides: Partial<Theme>[]
): Theme {
  return Object.assign({}, theme, ...themeOverrides) // TODO consider mergeDeep?
}
