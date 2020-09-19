import React, { ReactElement, ComponentType } from "react"
import hoistNonReactStatics from "hoist-non-react-statics"
import { ComponentStyler, Theme } from "./types"
import {
  useTheme,
  ThemeProvider as EmotionThemeProvider,
} from "emotion-theming"
import { mergeTheme } from "./util/mergeTheme"

interface WithThemeProps {
  themeOverrides?: Partial<Theme>
}

const withTheme = <P extends object>(
  WrappedComponent: ComponentType<P>,
  componentStyler: ComponentStyler
) => {
  const ThemedComponent = ({
    themeOverrides = {},
    ...props
  }: P & WithThemeProps): ReactElement => {
    const theme: Theme = useTheme()
    const componentTheme = mergeTheme(
      theme,
      componentStyler(theme),
      themeOverrides
    )

    return (
      <EmotionThemeProvider theme={componentTheme}>
        <WrappedComponent {...(props as P)} />
      </EmotionThemeProvider>
    )
  }

  ThemedComponent.displayName = `Themeable(${WrappedComponent.displayName ||
    WrappedComponent.name})`
  ThemedComponent.defaultProps = WrappedComponent.defaultProps as Partial<P>

  return hoistNonReactStatics(ThemedComponent, WrappedComponent)
}

export default withTheme
