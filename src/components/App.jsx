import './App.css'
import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { clearUser, setUser } from '../reducers/userReducer'
import { useDispatch, useSelector } from 'react-redux'
import Container from '@material-ui/core/Container'
import FilterBar from './FilterBar'
import ListView from './ListView'
import LogButton from './LogButton'
import LoginForm from './LoginForm'
import NavBarMenu from './NavBarMenu'
import Notification from './Notification'
import ProductForm from './ProductForm'
import TileView from './TileView'
import { initProducts } from '../reducers/productReducer'
import productService from '../services/products'
import { setFilter } from '../reducers/filterReducer'

const App = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products)
  const filter = useSelector(state => state.filter)
  const view = useSelector(state => state.view)
  console.log(view)

  const CATEGORIES = [
    'all',
    'produce',
    'dairy',
    'frozen',
    'meat',
  ]

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

  const productsToDisplay = () => {
    if (filter === 'all') {
      return products
    }
    else {
      return products.filter((product) => product.category === filter)
    }
  }

  const defineFilter = (category) => {
    dispatch(setFilter(category))
  }

  const logOut = () => {
    dispatch(clearUser())
    productService.setToken(null)
    window.localStorage.removeItem('loggedGroceryIOUser')
  }

  const tileView = () => {
    return (
      <TileView products={productsToDisplay()} />
    )
  }

  const listView = () => {
    return (
      <ListView products={productsToDisplay()} />
    )
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
          Groceryio
        </div>
        <LogButton logOut={logOut} />
      </header>

      <FilterBar filters={CATEGORIES} defineFilter={defineFilter} />
      <Notification />
      {view === 'list' && listView()}
      {view === 'tile' && tileView()}
    </Container>
  )
}

export default App