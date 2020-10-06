import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './logButton.css'

const LogButton = ({ logOut }) => {
  const history = useHistory()
  const currentUser = useSelector(state => state.user)

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
      { currentUser === null ?
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


















