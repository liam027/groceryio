import './App.css'
import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { clearUser, setUser } from '../reducers/userReducer'
import { createProduct, setProducts } from '../reducers/productReducer'
import { useDispatch, useSelector } from 'react-redux'
import FilterBar from './FilterBar'
import ItemList from './ItemList'
import ItemTile from './ItemTile'
import LogButton from './LogButton'
import LoginForm from './LoginForm'
import NavBarMenu from './NavBarMenu'
import Notification from './Notification'
import ProductForm from './ProductForm'
import productService from '../services/products'
import { setFilter } from '../reducers/filterReducer'
import { setMessage } from '../reducers/messageReducer'

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
          <LoginForm  />
        </Route>
        <Route path='/add_product'>
          <ProductForm addProduct={addProduct} />
        </Route>
      </Switch>

      <header className='navbar'>
        <NavBarMenu />
        <span className='title'>Groceryio</span>
        <LogButton logOut={logOut} />
      </header>

      <Notification />
      <FilterBar filters={CATEGORIES} defineFilter={defineFilter} />
      {view === 'list' && listView()}
      {view === 'tile' && tileView()}
    </div>
  )
}

export default App