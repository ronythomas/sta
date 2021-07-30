import React from 'react'
import shallow from 'zustand'

// import { logger } from '../../utils/utils'
import useStore from './../../utils/store'

const Dashboard = () => {
  // logger('log', 'Dashboard')
  const { setStoreValues } = useStore(
    (state) => ({
      setStoreValues: state.setStoreValues,
    }),
    shallow
  )

  const handleLogout = () => {
    // logger('log', 'handleLogout()')
    setStoreValues({ isAuth: false, authRole: false })
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Protected Page</p>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  )
}

export default Dashboard
