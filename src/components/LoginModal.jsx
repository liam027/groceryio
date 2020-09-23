import loginService from '../services/login'
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './loginModal.css';

const LoginModal = ({ setUser, setMessage }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      console.log({ username, password })
      const user = await loginService.login({ username, password })
      setUser(user)
      setUsername('')
      setPassword('')
    }
    catch (exception) {
      setMessage('Wrong credentials')
      setTimeout(() => {
        setMessage(null)
      }, 5000);
    }
  }

  return (
    <div id="login-modal">
      <div id="login-form-container">
        <form id="loginForm" onSubmit={handleLogin}>
          <div>
            <h1>Login</h1>
          </div>
          <div className="login-label-container emph">
            <label className="login-label">Username</label>
            <input id="username" value={username} onChange={({ target }) => setUsername(target.value)} />
          </div>
          <div className="login-label-container emph">
            <label className="login-label">Password</label>
            <input id="password" value={password} onChange={({ target }) => setPassword(target.value)} />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
          <div>Not signed up? Create an account to save your lists and recommendations.</div>
        </form>
      </div>
    </div>
  );
};

LoginModal.propTypes = {
  errorMessage: PropTypes.string,
};

export default LoginModal;
