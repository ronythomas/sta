import shallow from 'zustand/shallow'

import { theme } from './../../utils/theme'
import useStore from './../../utils/store'

/**
 * Non-rendering component to track breakpoint and reset when resize.
 */
const BreakpointManager = () => {
  const BREAKPOINTS = theme.breakpoints.keys
  const BREAKPOINTS_OBJ = theme.breakpoints.values

  const { setStoreValues } = useStore(
    (state) => ({
      setStoreValues: state.setStoreValues,
    }),
    shallow
  )

  const setBrowserWidthAndBreakpoint = () => {
    // console.log('setBrowserWidthAndBreakpoint')
    let breakpoint
    BREAKPOINTS.forEach((el, i) => {
      if (
        window.innerWidth >= BREAKPOINTS_OBJ[el] &&
        (!BREAKPOINTS[i + 1] ||
          window.innerWidth < BREAKPOINTS_OBJ[BREAKPOINTS[i + 1]])
      ) {
        breakpoint = el
      }
    })
    // console.log('breakpoint is, ', breakpoint)
    setStoreValues({
      breakpoint: breakpoint,
      browserWidth: window.innerWidth,
      windowInnerHeight: window.innerHeight,
    })
  }

  setBrowserWidthAndBreakpoint()
  window.addEventListener('resize', () => {
    setBrowserWidthAndBreakpoint()
  })

  return ''
}

export default BreakpointManager
