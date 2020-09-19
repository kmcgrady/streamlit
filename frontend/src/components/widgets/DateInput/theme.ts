import { ComponentStyler } from "themeable"

const styler: ComponentStyler = theme => ({
  labelTextColor: theme.colors.orange90,
  labelTextSize: theme.fontSizes.sm,
  labelSpacing: theme.fontSizes.xxs,
})

export default styler
