import React from 'react'
import i18n from '@pureartisan/simple-i18n'

const Layout = ({ children, ...props }) => {
  return (
    <div className="layout">
      <header className="page-header">
        <h1>{i18n.translate(`SITE_TITLE`)}</h1>
      </header>
      {children}
      <footer></footer>
    </div>
  )
}

export default Layout
