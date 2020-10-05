import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ title, user, logout }) => {

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
    padding: '10px 20px',
    margin: '0px 20px',
    color: 'white',
    backgroundColor: '#3568ff',
    borderRadius: '10px',
    cursor: 'pointer'
  }

  const loginButton = () => {
    return (
      <Link style={loginStyle} to='/login'>
        <span>Login</span>
      </Link>
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

export default Header
