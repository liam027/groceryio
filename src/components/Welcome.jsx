import './welcome.css'
import { Box, Button, Container, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { setUser } from '../reducers/userReducer'
import { useDispatch } from 'react-redux'
import userService from '../services/user'
import formatUserError from '../utils/formatUserError'

const Welcome = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState(null)
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const MAX_USERNAME_LENGTH = 28

  const handleNameChange = (event) => {
    if (event.target.value.length < MAX_USERNAME_LENGTH) {
      setName(event.target.value)
    }
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const submitUser = async (event) => {
    event.preventDefault()
    const user = {
      username: name,
      password: password
    }
    try {
      const newUser = await userService.create(user)
      setName('')
      setPassword('')
      dispatch(setUser(newUser))
    }
    catch (exception) {
      let formattedError = formatUserError(exception.response.data.error)
      setNameError(formattedError)
    }
  }

  return (
    <Box id="welcome-container">
      <Container id="cart-icon-container">
        <img
          id="cart-icon"
          src="shopping-cart.svg"
          alt="A shopping cart"
          height="800"
          width="800" />
      </Container>
      <Container id="core-description">
        <Box>Organize your groceries and waste less, create an account below to get started.</Box>
        <form id="user-form" onSubmit={submitUser}>
          <Box>
            <TextField error={nameError} label='Username' helperText={nameError} onChange={handleNameChange} />
          </Box>
          <Box>
            <TextField label='Password' helperText={passwordError} onChange={handlePasswordChange} />
          </Box>
          <br/>
          <Box>
            <Button type="submit" id="product-submit">Let's go!</Button>
          </Box>
        </form>
      </Container>

    </Box>
  )
}

export default Welcome
