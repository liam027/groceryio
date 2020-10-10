import './navBarMenu.css'
import Button from './Button'
import { IconButton } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'
import { setView } from '../reducers/viewReducer'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

const NavBarMenu = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  return (
    <span id="navbar-menu">
      <Button variant="contained" color="primary" mr={2} onClick={() => dispatch(setView('list'))}>LIST</Button>
      <Button variant="contained" color="primary" mr={2} onClick={() => dispatch(setView('tile'))}>TILE</Button>
      <IconButton color="primary" aria-label="Add product" onClick={() => history.push('/add_product')}>
        <span className='add-product-button'></span>
      </IconButton>
    </span>
  )
}

NavBarMenu.propTypes = {
  errorMessage: PropTypes.string,
}

export default NavBarMenu
