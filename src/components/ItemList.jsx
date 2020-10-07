import './itemList.css'
import PropTypes from 'prop-types'
import React from 'react'
import { deleteProduct } from '../reducers/productReducer'
import { useDispatch } from 'react-redux'

const ItemList = ({ products }) => {
  const dispatch = useDispatch()

  const populateProductList = (prods) => (
    <>
      {prods.map((product) => (
        <div key={product.id} className="list-item">
          <span>{product.name}</span>
          <span>{product.quantity}</span>
          <span onClick={() => dispatch(deleteProduct(product.id))}>X</span>
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
