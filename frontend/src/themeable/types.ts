export type StyleValue = any

export interface ThemeMap {
  [key: string]: StyleValue
}

export interface Theme {
  breakpoints: ThemeMap
  colors: ThemeMap
  fonts: ThemeMap
  fontSizes: ThemeMap
  fontWeights: ThemeMap
  lineHeights: ThemeMap
  letterSpacings: ThemeMap
  sizes: ThemeMap
  spacing: ThemeMap
  zIndices: ThemeMap
  [componentTheme: string]: StyleValue
}

export type ComponentStyler = (t: Theme) => Partial<Theme>
