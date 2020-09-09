import axios from 'axios'
import React, { useState, useEffect  } from 'react';
import './App.css';
import Header from './Header';
import ItemGrid from './ItemGrid';
import FilterBar from './FilterBar';

const App = () => {
  const title = 'Groceryio';
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
    console.log('effect');
    axios
      .get('http://localhost:3001/products')
      .then(response => {
        console.log('product data retreived')
        setProducts(response.data)
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
    axios
      .post('http://localhost:3001/products', productObj)
      .then(response => {
        console.log('POST response', response);
        setProducts(products.concat(response.data));
        setNewProduct('');
    })
  }

  const handleNewProductChange = (event) => {
    console.log(event.target.value);
    setNewProduct(event.target.value);
  }

  return (
    <div id="App">
      <Header title={title} />
      <FilterBar filters={CATEGORIES} defineFilter={defineFilter} />
      <ItemGrid products={productsToDisplay()} />
      <form onSubmit={addProduct}>
        <input value={newProduct} onChange={handleNewProductChange} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default App;
