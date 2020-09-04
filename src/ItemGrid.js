import React from 'react';
import ItemCard from './ItemCard.js'
import './itemGrid.css';

const ItemGrid = (props) => {
  return (
    <div id="itemGrid">
      <ItemCard product={props.products[0]}/>
    </div>
  )
}

export default ItemGrid;
