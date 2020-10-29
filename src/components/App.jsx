import './App.css'
import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { clearUser, setUser } from '../reducers/userReducer'
import { useDispatch, useSelector } from 'react-redux'
import Container from '@material-ui/core/Container'
import Groceries from './Groceries'
import LogButton from './LogButton'
import LoginForm from './LoginForm'
import NavBarMenu from './NavBarMenu'
import ProductForm from './ProductForm'
import Welcome from './Welcome'
import { initProducts } from '../reducers/productReducer'
import productService from '../services/products'

const App = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)


  const getLoggedUser = () => {
    const loggedUser = window.localStorage.getItem('loggedGroceryIOUser')
    if (loggedUser) {
      const user = JSON.parse(loggedUser)
      dispatch(setUser(user))
      productService.setToken(user.token)
    }
  }

  useEffect(getLoggedUser, []) // [] = only run after first render

  const getProductsHook = () => {
    dispatch(initProducts())
  }

  useEffect(getProductsHook, []) // [] = only run after first render

  const logOut = () => {
    dispatch(clearUser())
    productService.setToken(null)
    window.localStorage.removeItem('loggedGroceryIOUser')
  }

  const welcome = () => {
    return (
      <Welcome />
    )
  }

  const groceries = () => {
    return <Groceries />
  }

  return (
    <Container id='App' maxWidth="lg">
      <Switch>
        <Route path='/login'>
          <LoginForm />
        </Route>
        <Route path='/add_product'>
          <ProductForm />
        </Route>
      </Switch>

      <header className='navbar'>
        <NavBarMenu />
        <div className='title-container'>
          Grocery.io
        </div>
        <LogButton logOut={logOut} />
      </header>

      {user ?  groceries() : welcome()}

      <div>Icons made by <a href="https://www.flaticon.com/authors/dinosoftlabs" title="DinosoftLabs">DinosoftLabs</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </Container>
  )
}

export default App