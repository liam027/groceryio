import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import ItemGrid from './ItemGrid';
import FilterBar from './FilterBar';

const App = (props) => {
  const title = 'Groceryio';
  const CATEGORIES = [
    "all"    ,
    "produce",
    "dairy"  ,
    "frozen" ,
    "meat"   ,
  ]
  const [products, setProducts] = useState(props.products)
  const [newProduct, setNewProduct] = useState('')
  const [filter, setFilter] = useState("all")

  const productsToDisplay = () => {
    if(filter == "all"){
      return products
    }
    else {
      return products.filter((product) => product.category == filter)
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
    setProducts(products.concat(productObj));
    setNewProduct('');
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
