import { get } from "lodash"
import { StyleValue, Theme } from "./types"
export * from "./types"
export { default as withTheme } from "./withTheme"

interface ThemeProp {
  theme: Theme
}

type ThemeStyler = (t: ThemeProp) => StyleValue

export function themeGet(variable: string): ThemeStyler {
  return ({ theme }: ThemeProp) => {
    return get(theme, variable)
  }
}
