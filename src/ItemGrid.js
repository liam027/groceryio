import React from 'react';
import ItemCard from './ItemCard.js'
import './itemGrid.css';

const ItemGrid = ( { products } ) => {

  const populateProductCards = (products) => (
    <>
      {products.map(product => (
        <ItemCard product={product}/>
      ))}
    </>
  );

  return (
    <div id="itemGrid">
      { populateProductCards(products) }
    </div>
  )
}

export default ItemGrid;
