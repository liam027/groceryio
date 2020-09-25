import React from 'react';
import PropTypes from 'prop-types';
import ItemCard from './ItemCard';
import './itemList.css';

const ItemList = ({ products, deleteProduct }) => {

  const populateProductCards = (prods) => (
    <>
      {prods.map((product) => (
        <ItemCard key={product.id} product={product} deleteProduct={deleteProduct} />
      ))}
    </>
  );

  return (
    <div id="itemGrid">
      { populateProductCards(products) }
    </div>
  );
};

ItemList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ItemList;
