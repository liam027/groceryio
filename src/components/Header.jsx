import React from 'react';
import APP_STATES from '../states'

const Header = ({ title, setAppState, user, logout }) => {

  const headerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 8fr 1fr',
    padding: '20px 0px',
    backgroundColor: 'black'
  }
  const titleStyle = {
    gridColumn: 2,
    textAlign: 'center',
    fontSize: '2em',
    fontWeight: 'bold',
    color: 'white',
  }
  const loginStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'middle',
    padding: '10px 40px',
    color: 'white',
    backgroundColor: '#3568ff',
    borderRadius: '10px',
    cursor: 'pointer'
  }

  const loginButton = () => {
    return (
      <div style={loginStyle} onClick={() => setAppState(APP_STATES.LOGIN)}>
        <span>Login</span>
      </div>
    )
  }

  const logoutButton = () => {
    return (
      <div style={loginStyle} onClick={logout}>
        <span>Logout</span>
      </div>
    )
  }

  return (
    <header style={headerStyle}>
      <span style={titleStyle}>{title}</span>
      {user === null ?
        loginButton() :
        logoutButton()
      }
    </header>
  )
}

export default Header;
