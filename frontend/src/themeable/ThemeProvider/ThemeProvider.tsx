import React, { ReactElement, ReactNode } from "react"
import { LightTheme, BaseProvider } from "baseui"
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming"
import { Client as Styletron } from "styletron-engine-atomic"
import { Provider as StyletronProvider } from "styletron-react"

import { Theme } from "themeable"

const engine = new Styletron({ prefix: "st-" })

export interface ThemeProviderProps {
  theme: Theme
  children: ReactNode
}

function ThemeProvider({ theme, children }: ThemeProviderProps): ReactElement {
  return (
    <EmotionThemeProvider theme={theme}>
      <StyletronProvider value={engine}>
        {/*
      The BaseProvider type definition doesn't support zIndex, but the object
      actually does. See: https://baseweb.design/components/base-provider/
      // @ts-ignore */}
        <BaseProvider theme={LightTheme} zIndex={theme.zIndices.popupMenu}>
          {children}
        </BaseProvider>
      </StyletronProvider>
    </EmotionThemeProvider>
  )
}

export default ThemeProvider
