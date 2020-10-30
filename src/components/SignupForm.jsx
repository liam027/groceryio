import { Box, Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import formatUserError from '../utils/formatUserError'
import loginService from '../services/login'
import { setUser } from '../reducers/userReducer'
import { useDispatch } from 'react-redux'
import userService from '../services/user'

const SignupForm = () => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [usernameError, setUsernameError] = useState(null)
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const MAX_USERNAME_LENGTH = 28

  const submitUser = async (event) => {
    event.preventDefault()
    const user = {
      username: username,
      password: password
    }
    try {
      await userService.create(user)
      const newUser = await loginService.login(user)
      setUsername('')
      setPassword('')
      setUsernameError(null)
      dispatch(setUser(newUser))
    }
    catch (exception) {
      let formattedError = formatUserError(exception)
      setUsernameError(formattedError)
    }
  }

  const handleNameChange = (event) => {
    if (event.target.value.length < MAX_USERNAME_LENGTH) {
      setUsername(event.target.value)
    }
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const inputContainerStyle = { minHeight: '80px'}

  return (
    <form id="user-form" onSubmit={submitUser}>
      <Box style={inputContainerStyle}>
        <TextField error={usernameError !== null} label='Username' helperText={usernameError} onChange={handleNameChange} />
      </Box>
      <Box style={inputContainerStyle}>
        <TextField label='Password' type="password" autoComplete="current-password" helperText={passwordError} onChange={handlePasswordChange} />
      </Box>
      <Box style={inputContainerStyle}>
        <Button variant="contained" color="default" type="submit" id="product-submit">Sign up!</Button>
      </Box>
    </form>
  )
}

export default SignupForm