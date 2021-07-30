import create from 'zustand'
import i18n from '@pureartisan/simple-i18n'

const [useStore] = create((set, get) => ({
  // Set any store values by passing in an object of values to merge.
  setStoreValues: (obj) => {
    set({ ...obj })
  },
  // Active language
  activeLang: `en_US`,
  // Authenticated, boolean
  isAuth: false,
  // Role, string: customer, distributor, rep, admin
  authRole: false,
  // Track viewport values
  breakpoint: '',
  browserWidth: 0,
  windowInnerHeight: 0,
  // Track runtime errors in the client
  eventErrors: [],
  // Push onto errors array.
  pushEventError: (error) => {
    let errors = get().eventErrors
    errors.push(error)
    set({
      eventErrors: errors,
    })
  },
}))

export default useStore
