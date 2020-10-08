import './tileView.css'
import ItemCard from './ItemCard'
import PropTypes from 'prop-types'
import React from 'react'

const TileView = ({ products }) => {

  const populateProductCards = (prods) => (
    <>
      {prods.map((product) => (
        <ItemCard key={product.id} product={product}/>
      ))}
    </>
  )

  return (
    <div id="tileView">
      { populateProductCards(products) }
    </div>
  )
}

TileView.propTypes = {
  products: PropTypes.array.isRequired,
}

export default TileView
