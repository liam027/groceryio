import './App.css';
import FilterBar from './FilterBar';
import Header from './Header';
import ItemGrid from './ItemGrid';
import productService from '../services/products'
import React, { useState, useEffect  } from 'react';

const App = () => {
  const title = 'Groceryio';
  const MAX_PRODUCT_NAME_LENGTH = 28;
  const CATEGORIES = [
    "all"    ,
    "produce",
    "dairy"  ,
    "frozen" ,
    "meat"   ,
  ]
  const [products, setProducts] = useState([])
  const [newProduct, setNewProduct] = useState('')
  const [filter, setFilter] = useState("all")

  const hook = () => {
    productService
      .getAll()
      .then(allProducts => {
        setProducts(allProducts)
    })
  }

  useEffect(hook, []) // [] specifies the effect to only run after first render

  const productsToDisplay = () => {
    if(filter === "all"){
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

  const addProduct = (event) => {
    event.preventDefault();
    const productObj = {
      name: newProduct,
      category: 'produce',
      quantity: 0
    };
    productService
      .create(productObj)
      .then(newProduct => {
        setProducts(products.concat(newProduct));
        setNewProduct('');
      })
  }

  const deleteProduct = (id) => {
    productService
      .deleteProduct(id)
      .then(response => {
        console.log('Product deleted. ID: ', response);
        setProducts(products.filter(product => product.id !== id))
      })
  }

  const handleNewProductChange = (event) => {
    if(event.target.value.length < MAX_PRODUCT_NAME_LENGTH ) {
      setNewProduct(event.target.value);
    }
    else {
      console.log("New product name too long");
    }
  }

  return (
    <div id="App">
      <Header title={title} />
      <form id="productForm" onSubmit={addProduct}>
        <input value={newProduct} onChange={handleNewProductChange} />
        <button type="submit" id="submitProductButton">Save</button>
      </form>
      <FilterBar filters={CATEGORIES} defineFilter={defineFilter} />
      <ItemGrid products={productsToDisplay()} deleteProduct={deleteProduct} />
    </div>
  );
};

export default App;
