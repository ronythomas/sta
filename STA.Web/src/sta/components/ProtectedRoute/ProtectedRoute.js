import React, { useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'

// import { logger } from '../../utils/utils'
import useStore from './../../utils/store'

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function ProtectedRoute({ children, ...rest }) {
  // logger('', 'ProtectedRoute()')
  const isAuth = useStore((state) => state.isAuth)

  return (
    <Route
      {...rest}
      render={({ location }) =>
        !!isAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
            }}
          />
        )
      }
    />
  )
}

export default ProtectedRoute
