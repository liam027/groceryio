import './logButton.css'
import Button from './Button'
import PropTypes from 'prop-types'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

const LogButton = ({ logOut }) => {
  const history = useHistory()
  const currentUser = useSelector(state => state.user)

  const login = () => {
    history.push('/login')
  }

  const loginButton = () => {
    return (
      <div className='log-button-container' onClick={login}>
        <Button id='log-button' className='pointer' variant="contained" color="primary">Login</Button>
      </div>
    )
  }

  const logoutButton = () => {
    return (
      <div className='log-button-container' onClick={logOut}>
        <Button id='log-button' className='pointer' variant="contained" color="secondary">Logout</Button>
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


















