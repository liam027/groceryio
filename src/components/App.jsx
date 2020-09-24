import './App.css';
import APP_STATES from '../states'
import FilterBar from './FilterBar';
import Header from './Header';
import ItemGrid from './ItemGrid';
import LoginModal from './LoginModal';
import Notification from './Notification';
import ProductForm from './ProductForm'
import productService from '../services/products'
import React, { useState, useEffect } from 'react'

const App = () => {
  const title = 'Groceryio';
  const CATEGORIES = [
    "all",
    "produce",
    "dairy",
    "frozen",
    "meat",
  ]
  const [appState, setAppState] = useState(APP_STATES.GRID)
  const [user, setUser] = useState(null)
  const [products, setProducts] = useState([])
  const [filter, setFilter] = useState("all")
  const [message, setMessage] = useState('Enter a new product!')

  const getLoggedUser = () => {
    const loggedUser = window.localStorage.getItem('loggedGroceryIOUser')
    if (loggedUser) {
      const user = JSON.parse(loggedUser)
      setUser(user)
      productService.setToken(user.token)
    }
  }

  useEffect(getLoggedUser, []) // [] specifies the effect to only run after first render

  const getProductsHook = () => {
    productService
      .getAll()
      .then(allProducts => {
        setProducts(allProducts)
        setMessage('Products loaded!')
      })
  }

  useEffect(getProductsHook, []) // [] specifies the effect to only run after first render

  const productsToDisplay = () => {
    if (filter === 'all') {
      return products
    }
    else {
      return products.filter((product) => product.category === filter)
    }
  }

  const defineFilter = (category) => {
    setFilter(category);
    console.log(category);
  }

  const addProduct = (productObj) => {
    productService
      .create(productObj)
      .then(newProduct => {
        setProducts(products.concat(newProduct));
      })
  }

  const deleteProduct = (id) => {
    productService
      .deleteProduct(id)
      .then(response => {
        console.log('Product deleted. ID: ', response);
        setProducts(products.filter(product => product.id !== id))
      })
      .catch(error => {
        setMessage(`ERROR: The ID '${id}' is not a current or valid product ID.`)
      })
  }

  const loginForm = () => {
    return <LoginModal setUser={setUser} setMessage={setMessage} setAppState={setAppState} />
  }

  const logout = () => {
    setUser(null)
    productService.setToken(null)
    window.localStorage.removeItem('loggedGroceryIOUser')
  }

  return (
    <div id="App">
      { appState === APP_STATES.LOGIN && loginForm()}
      <Header title={title} user={user} setAppState={setAppState} logout={logout} />
      <Notification message={message} />
      <ProductForm addProduct={addProduct} setMessage={setMessage} />
      <FilterBar filters={CATEGORIES} defineFilter={defineFilter} />
      <ItemGrid products={productsToDisplay()} deleteProduct={deleteProduct} />
    </div>
  );
};

export default App;
