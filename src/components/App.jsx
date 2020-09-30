import './App.css';
import APP_STATES from '../states'
import FilterBar from './FilterBar';
import Header from './Header';
import ItemTile from './ItemTile';
import ItemList from './ItemList';
import LoginModal from './LoginModal';
import Notification from './Notification';
import ProductForm from './ProductForm'
import productService from '../services/products'
import React, { useState, useEffect, useRef } from 'react'
import Togglable from './Toggleable';
import ViewSelector from './ViewSelector'

const App = () => {
  const title = 'Groceryio';
  const CATEGORIES = [
    "all",
    "produce",
    "dairy",
    "frozen",
    "meat",
  ]

  const [appState, setAppState] = useState(APP_STATES.LIST)
  const [user, setUser] = useState(null)
  const [products, setProducts] = useState([])
  const newProductFormRef = useRef()
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
      .catch(() => {
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

  const tileView = () => {
    return(
      <ItemTile products={productsToDisplay()} deleteProduct={deleteProduct} />
    )
  }

  const listView = () => {
    return(
      <ItemList products={productsToDisplay()} deleteProduct={deleteProduct} />
    )
  }

  return (
    <div id="App">
      { appState === APP_STATES.LOGIN && loginForm()}
      <Header title={title} user={user} setAppState={setAppState} logout={logout} />
      <Notification message={message} />
      <Togglable buttonLabel="Add Product" ref={newProductFormRef}>
        <ProductForm addProduct={addProduct} setMessage={setMessage} />
      </Togglable>
      <ViewSelector setAppState={setAppState} />
      <FilterBar filters={CATEGORIES} defineFilter={defineFilter} />
      { appState === APP_STATES.LIST && listView()}
      { appState === APP_STATES.TILE && tileView()}
    </div>
  );
};

export default App;
