import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import i18n from '@pureartisan/simple-i18n'
import Grid from '@material-ui/core/Grid'

import shallow from 'zustand/shallow'
import axios from 'axios'

import useStore from './../../utils/store'
import { logger } from './../../utils/utils'
import { useStyles } from './styles'

const Login = () => {
  const { setStoreValues } = useStore(
    (state) => ({
      setStoreValues: state.setStoreValues,
    }),
    shallow
  )

  const usernameRef = useRef(null)
  const passwordRef = useRef(null)

  const handleLogin = () => {
    const username = usernameRef.current.value
    const password = passwordRef.current.value
    logger('log', `handleLogin: ${username}, ${password}`)
    // TODO: Data validation.
    if (!!username && !!password) {
      axios
        .post('/login', {
          username: username,
          password: password,
        })
        .then((response) => {
          logger('log', response)
          setStoreValues({
            isAuth: response.data.isAuth,
            authRole: response.data.role,
          })
          // TODO: Add session cookie.
        })
        .catch((error) => {
          console.log('error!')
          console.error(error)
        })
    }
  }

  const classes = useStyles()
  return (
    <Grid container>
      <Grid item xs={12}>
        <h2>{i18n.translate(`PAGE_TITLE_LOGIN`)}</h2>
      </Grid>
      <Grid item xs={12}>
        <p>
          <Link to="/dashboard">{`Access the ${i18n.translate(
            `PAGE_TITLE_DASHBOARD`
          )}`}</Link>
        </p>
      </Grid>
      <Grid item xs={12}>
        {/** TODO: Implement better form, form validation, and honeypot. */}
        <label className={classes.inputGroup}>
          Username:
          <input type="text" ref={usernameRef} />
        </label>
        <label className={classes.inputGroup}>
          Password:
          <input type="text" type="password" ref={passwordRef} />
        </label>
        <button onClick={handleLogin}>Log In</button>
      </Grid>
    </Grid>
  )
}

export default Login
