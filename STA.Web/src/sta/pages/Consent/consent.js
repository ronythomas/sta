import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'

const Consent = () => {
  // console.log('app')

  // Store consent cookie
  // (obtained when app user grants permission
  // for the app to act on its behalf with docusign)
  const [consentCookie, setConsentCookie] = useState(false)

  // Store consent link from express server.
  const [consentLink, setConsentLink] = useState('')
  const getConsentLink = () => {
    // Fetch consent URL for obtaining consent from app user
    fetch('/consent-url')
      .then((res) => res.json())
      .then((data) => setConsentLink(data.message))
  }

  const [accessToken, setAccessToken] = useState({})
  const getAccessToken = () => {
    console.log('getAccessToken')
    // Fetch consent URL for obtaining consent from app user
    fetch(`/auth?code=${Cookies.get('dsConsentCookie')}`)
      .then((res) => res.json())
      .then((data) => setAccessToken(data))
  }
  useEffect(() => {
    console.log('accessToken, ', accessToken)
  }, [accessToken])

  useEffect(() => {
    // Use either a code in the query string or an existing cookie
    // provided for user consent (needs to be checked for expiry by a second api call)
    // console.log(window.location.search)
    const urlParams = Object.fromEntries(
      new URLSearchParams(window.location.search)
    )
    // console.log(urlParams)
    if (!!urlParams.code) {
      // If code is in query string, set as session cookie.
      Cookies.set('dsConsentCookie', urlParams.code, { expires: 7 })
      setConsentCookie(true)
    } else if (!!Cookies.get('dsConsentCookie')) {
      // If session cookie still exists, use that.
      setConsentCookie(true)
    } else {
      // Else fetch the consent link.
      getConsentLink()
    }
  }, [])

  useEffect(() => {
    console.log('consentLink changed: ', consentLink)
  }, [consentLink])
  useEffect(() => {
    const cookie = Cookies.get('dsConsentCookie')
    if (!!cookie && cookie.length > 0) {
      getAccessToken()
    }
  }, [consentCookie])

  return (
    <div className="App">
      <header className="App-header">
        {!consentCookie && consentLink.length > 0 && (
          <>
            <p>
              You need to give this application consent to utilize DocuSign on
              your behalf.
            </p>
            <a className="consent-link" href={`${consentLink}`}>
              Give Consent
            </a>
          </>
        )}
        {!!consentCookie && (
          <>
            <p>You have consent!</p>
            <p>The status of your access token is: ${}</p>
          </>
        )}
      </header>
    </div>
  )
}

export default Consent
