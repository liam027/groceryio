import './itemList.css'
import PropTypes from 'prop-types'
import React from 'react'

const ItemList = ({ products, deleteProduct }) => {

  const populateProductList = (prods) => (
    <>
      {prods.map((product) => (
        <div key={product.id} className="list-item">
          <span>{product.name}</span>
          <span>{product.quantity}</span>
          <span onClick={deleteProduct}>X</span>
        </div>
      ))}
    </>
  )

  return (
    <div id="itemList">
      { populateProductList(products) }
    </div>
  )
}

ItemList.propTypes = {
  products: PropTypes.array.isRequired,
}

export default ItemList
