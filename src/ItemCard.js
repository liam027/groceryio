import React, { useState } from 'react'
import './itemCard.css';

const ItemCard = ({ product }) => {
  const [ quantity, setQuantity ] = useState(product.quantity)
  const name = product.name
  const increaseByOne = () => setQuantity(quantity + 1)
  const decreaseByOne = () => setQuantity(quantity - 1)
  return (
    <div className="itemCard">
      <div className="name">{name}</div>
      <div className="quantity">{quantity}</div>
      <div className="plus" onClick={increaseByOne}>plus</div>
      <div className="minus"onClick={decreaseByOne}>minus</div>
    </div>
  )
}

export default ItemCard;
