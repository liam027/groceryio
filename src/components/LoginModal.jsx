import APP_STATES from '../states'
import { Link, useHistory } from 'react-router-dom'
import loginService from '../services/login'
import productsService from '../services/products'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './loginModal.css'

const LoginModal = ({ setUser, setMessage }) => {
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      console.log({ username, password })
      const user = await loginService.login({ username, password })

      window.localStorage.setItem('loggedGroceryIOUser', JSON.stringify(user))
      productsService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
      history.push('/')
    }
    catch (exception) {
      setMessage('Wrong credentials')
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    }
  }

  const closeModal = () => {
    setUsername('')
    setPassword('')
    history.push('/')
  }

  return (
    <div id="login-modal">
      <div id="login-form-container">
        <Link to="/">
          <div className="close-btn emph" onClick={closeModal}>
            <div>X</div>
          </div>
        </Link>
        <form id="loginForm" onSubmit={handleLogin}>
          <div className="header">
            <div>Login</div>
          </div>
          <div className="label-container emph">
            <label className="label">Username</label>
            <input id="username" value={username} onChange={({ target }) => setUsername(target.value)} />
          </div>
          <div className="label-container emph">
            <label className="label">Password</label>
            <input id="password" value={password} onChange={({ target }) => setPassword(target.value)} />
          </div>
          <div>
            <button type="submit" id="login-submit">Login</button>
          </div>
          <div>Not signed up? Create an account to save your lists and recommendations.</div>
        </form>
      </div>
    </div>
  )
}

LoginModal.propTypes = {
  setAppState: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
  setMessage: PropTypes.func.isRequired
}

export default LoginModal