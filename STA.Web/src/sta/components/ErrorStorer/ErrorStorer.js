import shallow from 'zustand/shallow'

import useStore from './../../utils/store'

/**
 * Non-rendering component to capture and store errors
 */
const ErrorStorer = () => {
  const { pushEventError } = useStore(
    (state) => ({
      pushEventError: state.pushEventError,
    }),
    shallow
  )

  window.addEventListener('error', (e) => {
    pushEventError(
      `${e.message}, in ${e.filename}, ${e.lineno}:${e.colno}, at ${e.timeStamp}.`
    )
  })

  // Test error logging by throwing an error after map loads.
  // setTimeout(() => {
  //   console.log('trial var, ', mooMooMoo)
  //   console.log(eventError)
  // }, 3000)

  return ''
}

export default ErrorStorer
