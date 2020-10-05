import APP_STATES from '../states'
import { Link, useHistory } from 'react-router-dom'
import React from 'react'
import PropTypes from 'prop-types'
import './navBarMenu.css'

const NavBarMenu = ({ setAppState }) => {
  const history = useHistory()

  return (
    <span id="navbar-menu">
      <span className="button border list" onClick={() => setAppState(APP_STATES.LIST)}>LIST</span>
      <span className="button border tile" onClick={() => setAppState(APP_STATES.TILE)}>TILE</span>
      <span className='button solid' onClick={() => history.push('/add_product')}>
        <span className='add-product-button'></span>
      </span>
    </span>
  )
}

NavBarMenu.propTypes = {
  errorMessage: PropTypes.string,
}

export default NavBarMenu
