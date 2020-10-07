import './itemTile.css'
import ItemCard from './ItemCard'
import PropTypes from 'prop-types'
import React from 'react'

const ItemTile = ({ products }) => {

  const populateProductCards = (prods) => (
    <>
      {prods.map((product) => (
        <ItemCard key={product.id} product={product}/>
      ))}
    </>
  )

  return (
    <div id="itemTile">
      { populateProductCards(products) }
    </div>
  )
}

ItemTile.propTypes = {
  products: PropTypes.array.isRequired,
}

export default ItemTile
