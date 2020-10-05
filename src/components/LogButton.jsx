import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import './logButton.css'

const LogButton = ({ user, logOut }) => {
  const history = useHistory()

  const login = () => {
    history.push('/login')
  }

  const loginButton = () => {
    return (
      <div className='log-button-container' onClick={login}>
        <span className='log-button'>Login</span>
      </div>
    )
  }

  const logoutButton = () => {
    return (
      <div className='log-button-container' onClick={logOut}>
        <span className='log-button'>Logout</span>
      </div>
    )
  }

  return (
    <>
      { user === null ?
        loginButton() :
        logoutButton()
      }
    </>
  )
}

LogButton.checkPropTypes = {
  user: PropTypes.object.isRequired,
}

export default LogButton


















