import React from 'react';
import PropTypes from 'prop-types';
import ItemCard from './ItemCard';
import './itemTile.css';

const ItemTile = ({ products, deleteProduct }) => {

  const populateProductCards = (prods) => (
    <>
      {prods.map((product) => (
        <ItemCard key={product.id} product={product} deleteProduct={deleteProduct} />
      ))}
    </>
  );

  return (
    <div id="itemTile">
      { populateProductCards(products) }
    </div>
  );
};

ItemTile.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ItemTile;
