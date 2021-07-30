import useStore from './store'
import shallow from 'zustand/shallow'

import { theme } from './theme'

export const useGetSpacing = (theme) => {
  const { breakpoint } = useStore(
    (state) => ({
      breakpoint: state.breakpoint,
    }),
    shallow
  )
  return (
    (theme.spacing *
      Object.keys(theme.breakpoints.values).indexOf(breakpoint)) /
    2
  )
}

/**
 * Logger: logs to console only if dev or testing envt
 * @param {String} type One of the 5 types of console logs: log, error, warn, info, debug
 * @param {String} message The message to log.
 */
export const logger = (type, message) => {
  if (
    process.env.NODE_ENV === 'development' ||
    process.env.NODE_ENV === 'testing'
  ) {
    switch (type) {
      case 'log':
        console.log(message)
        break
      case 'error':
        console.error(message)
        break
      case 'info':
        console.info(message)
        break
      case 'debug':
        console.debug(message)
        break
      case 'warn':
        console.debug(message)
        break
      default:
        console.log(message)
    }
  }
}
