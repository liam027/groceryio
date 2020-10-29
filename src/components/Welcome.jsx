import './welcome.css'
import { Box, Container, Tab, Tabs } from '@material-ui/core'
import React, { useState } from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import TabPanel from './TabPanel'

const Welcome = () => {
  const [welcomeState, setWelcomeState] = useState('signup')

  const handleTabChange = (event, newState) => {
    setWelcomeState(newState)
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
        <Box>
          <h2>Organize your groceries and waste less!</h2>
        </Box>
        <Box>
          <Tabs onChange={handleTabChange} aria-label="simple tabs example">
            <Tab value="signup" label="Sign Up" />
            <Tab value="login" label="Login" />
          </Tabs>
        </Box>
        <TabPanel value={welcomeState} index="signup">
          <SignupForm />
        </TabPanel>
        <TabPanel value={welcomeState} index="login">
          <LoginForm />
        </TabPanel>
      </Container>

    </Box>
  )
}

export default Welcome
