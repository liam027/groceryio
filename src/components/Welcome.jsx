import './welcome.css'
import { Box, ButtonGroup, Container } from '@material-ui/core'
import React, { useState } from 'react'
import Button from './Button'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

const Welcome = () => {
  const [welcomeState, setWelcomeState] = useState('signup')

  const welcomeForm = () => {
    switch (welcomeState) {
    case 'signup':
      return <SignupForm />
    case 'login':
      return <LoginForm />
    default:
      break
    }
  }

  const buttonGroupStyle = { marginBottom: '30px' }

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
        <Box>
          <h2>Organize your groceries and waste less!</h2>
        </Box>
        <ButtonGroup style={buttonGroupStyle} color="primary" aria-label="outlined primary button group">
          <Button
            onClick={() => setWelcomeState('signup')}
            variant='contained'
            color={welcomeState === 'signup' ? 'primary' : 'default'}>
            Signup
          </Button>
          <Button
            onClick={() => setWelcomeState('login')}
            variant='contained'
            color={welcomeState === 'login' ? 'primary' : 'default'}>
            Login
          </Button>
        </ButtonGroup>
        {welcomeForm()}
      </Container>

    </Box>
  )
}

export default Welcome
