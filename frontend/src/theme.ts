import { extendTheme } from "@chakra-ui/core"

export default extendTheme({
  colors: {
    brand: {
      primary: "#f63366",
      secondary: "#a3a8b8",
    },
    gray: {
      50: "#fafafa",
      100: "#fafafa", // faint
      200: "#f0f2f6", // lightest
      300: "#e6eaf1", // lighter
      400: "#d5dae5", // light
      500: "#bfc5d3", // normal
      600: "#a3a8b8",
      700: "#808495", // dark
      800: "#555867", // darker
      900: "#262730",
      1000: "#0e1117",
    },
  },
  fonts: {
    body: "IBM Plex Sans, sans-serif",
    heading: "IBM Plex Sans, sans-serif",
    mono: "IBM Plex Mono, monospace",
  },
  fontSizes: {
    xs: "0.5rem",
    sm: "0.8rem",
    md: "1rem",
    lg: "1.2rem",
    xl: "1.4rem",
    "2xl": "1.6rem",
    "3xl": "1.8rem",
    "4xl": "2rem",
    "5xl": "2.2rem",
    "6xl": "2.4rem",
  },
  sizes: {
    icon: "0.9rem",
  },
})
