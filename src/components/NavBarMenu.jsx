import { useHistory } from 'react-router-dom'
import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { setView } from '../reducers/viewReducer'
import './navBarMenu.css'

const NavBarMenu = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  return (
    <span id="navbar-menu">
      <span className="button border list" onClick={() => dispatch(setView('list'))}>LIST</span>
      <span className="button border tile" onClick={() => dispatch(setView('tile'))}>TILE</span>
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
