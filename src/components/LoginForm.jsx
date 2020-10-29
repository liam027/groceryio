import { Box, Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import formatUserError from '../utils/formatUserError'
import loginService from '../services/login'
import { setUser } from '../reducers/userReducer'
import { useDispatch } from 'react-redux'

const LoginForm = () => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [nameError, setNameError] = useState(null)
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({ username, password })
      dispatch(setUser(user))
      setUsername('')
      setPassword('')
    }
    catch (exception) {
      let formattedError = formatUserError(exception)
      setNameError(formattedError)
    }
  }

  return (
    <form id="login-form" onSubmit={handleLogin}>
      <Box>
        <TextField error={nameError !== null} label='Username' helperText={nameError} onChange={({ target }) => setUsername(target.value)} />
      </Box>
      <Box>
        <TextField error={nameError !== null} label='Password' helperText={nameError} onChange={({ target }) => setPassword(target.value)} />
      </Box>
      <Box>
        <Button type="submit" id="login-submit">Login</Button>
      </Box>
    </form>
  )
}

export default LoginForm