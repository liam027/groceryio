import './App.css'
import APP_STATES from '../states'
import { createProduct, setProducts } from '../reducers/productReducer'
import { Switch, Route } from 'react-router-dom'
import FilterBar from './FilterBar'
import { setFilter } from '../reducers/filterReducer'
import ItemTile from './ItemTile'
import ItemList from './ItemList'
import LoginForm from './LoginForm'
import LogButton from './LogButton'
import NavBarMenu from './NavBarMenu'
import Notification from './Notification'
import ProductForm from './ProductForm'
import productService from '../services/products'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setUser, clearUser } from '../reducers/userReducer'
import { setMessage } from '../reducers/messageReducer'

const App = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products)
  const filter = useSelector(state => state.filter)

  const CATEGORIES = [
    'all',
    'produce',
    'dairy',
    'frozen',
    'meat',
  ]

  const [appState, setAppState] = useState(APP_STATES.TILE)

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
    productService
      .getAll()
      .then(allProducts => {
        dispatch(setProducts(allProducts))
        dispatch(setMessage('Products loaded!'))
      })
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

  const addProduct = (productObj) => {
    productService
      .create(productObj)
      .then(newProduct => {
        dispatch(createProduct(newProduct))
      })
  }

  const deleteProduct = (id) => {
    productService
      .deleteProduct(id)
      .then(response => {
        console.log('Product deleted. ID: ', response)
        dispatch(setProducts(products.filter(product => product.id !== id)))
      })
      .catch(() => {
        dispatch(setMessage(`ERROR: The ID '${id}' is not a current or valid product ID.`))
      })
  }

  const logOut = () => {
    dispatch(clearUser())
    productService.setToken(null)
    window.localStorage.removeItem('loggedGroceryIOUser')
  }

  const tileView = () => {
    return (
      <ItemTile products={productsToDisplay()} deleteProduct={deleteProduct} />
    )
  }

  const listView = () => {
    return (
      <ItemList products={productsToDisplay()} deleteProduct={deleteProduct} />
    )
  }

  return (
    <div id='App'>
      <Switch>
        <Route path='/login'>
          <LoginForm setAppState={setAppState} />
        </Route>
        <Route path='/add_product'>
          <ProductForm addProduct={addProduct} />
        </Route>
      </Switch>

      <header className='navbar'>
        <NavBarMenu setAppState={setAppState} />
        <span className='title'>Groceryio</span>
        <LogButton logOut={logOut} />
      </header>

      <Notification />
      <FilterBar filters={CATEGORIES} defineFilter={defineFilter} />
      {appState === APP_STATES.LIST && listView()}
      {appState === APP_STATES.TILE && tileView()}
    </div>
  )
}

export default App