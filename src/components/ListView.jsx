import './listView.css'
import PropTypes from 'prop-types'
import React from 'react'
import { deleteProduct } from '../reducers/productReducer'
import { useDispatch } from 'react-redux'

const ListView = ({ products }) => {
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
    <div id="listView">
      { populateProductList(products) }
    </div>
  )
}

ListView.propTypes = {
  products: PropTypes.array.isRequired,
}

export default ListView
