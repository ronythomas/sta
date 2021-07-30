import { createTheme } from '@material-ui/core/styles'

export const variables = {
  colors: {
    primary: '#20232a',
    white: '#ffffff',
  },
}

const breakpoints = {
  xs: 0,
  sm: 360,
  md: 768,
  lg: 960,
  xl: 1440,
}

export const theme = createTheme({
  spacing: 5, // Default spacing of 5px, use useGetSpacing in ./src/sta/utils/utils to calc column padding based on breakpoint
  breakpoints: {
    values: breakpoints,
  },
  overrides: {},
  extras: {},
})
