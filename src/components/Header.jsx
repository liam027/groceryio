import React from 'react';
import APP_STATES from '../states'

const Header = ({ title, setAppState }) => {

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

  return (
    <header style={headerStyle}>
      <span style={titleStyle}>{title}</span>
      <div style={loginStyle}>
        <span onClick={() => setAppState(APP_STATES.LOGIN)}>Login</span>
      </div>
    </header>
  )
}

export default Header;
