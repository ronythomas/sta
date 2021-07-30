import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import i18n from '@pureartisan/simple-i18n'
import { ThemeProvider } from '@material-ui/core/styles'
import shallow from 'zustand/shallow'

import useStore from './utils/store'
import './App.css'
import { Login, Dashboard } from './pages'
import { langSet } from './constants/lang'
import { theme } from './utils/theme'
import { logger } from './utils/utils'
import ErrorStorer from './components/ErrorStorer'
import BreakpointManager from './components/BreakpointManager'
import ProtectedRoute from './components/ProtectedRoute'
import Layout from './components/Layout'

const App = () => {
  // Instantiate language pack
  i18n.init({
    locale: 'en_US',
    languages: {
      en_US: langSet.en_US,
    },
  })

  const { isAuth, authRole, eventErrors } = useStore(
    (state) => ({
      isAuth: state.isAuth,
      authRole: state.authRole,
    }),
    shallow
  )

  useEffect(() => {
    logger('log', `App.js, isAuth changed: ${isAuth}`)
  }, [isAuth])

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <BreakpointManager />
        <ErrorStorer />
        <div className="App">
          <Layout>
            <Switch>
              <ProtectedRoute path="/dashboard">
                <Dashboard />
              </ProtectedRoute>
              <Route
                path="/"
                render={({ location }) =>
                  !isAuth ? (
                    <Login />
                  ) : (
                    <Redirect
                      to={{
                        pathname: '/dashboard',
                      }}
                    />
                  )
                }
              />
            </Switch>
          </Layout>
        </div>
      </ThemeProvider>
    </Router>
  )
}

export default App
