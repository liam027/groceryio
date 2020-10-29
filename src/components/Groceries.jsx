import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FilterBar from './FilterBar'
import ListView from './ListView'
import Notification from './Notification'
import TileView from './TileView'
import { initProducts } from '../reducers/productReducer'
import { setFilter } from '../reducers/filterReducer'

const Groceries = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const products = useSelector(state => state.products)
  const filter = useSelector(state => state.filter)
  const view = useSelector(state => state.view)

  const CATEGORIES = [
    'all',
    'produce',
    'dairy',
    'frozen',
    'meat',
  ]

  const getProductsHook = () => {
    console.log(user)
    dispatch(initProducts(user.id))
  }

  useEffect(getProductsHook, []) // [] = only run after first render

  const productsToDisplay = () => {
    if (filter === 'all') {
      return products
    }
    else {
      return products.filter((product) => product.category === filter)
    }
  }

  const defineFilter = (category) => {
    dispatch(setFilter(category))
  }

  const tileView = () => { return (<TileView products={productsToDisplay()} />)}

  const listView = () => {return (<ListView products={productsToDisplay()} />)}

  return (
    <>
      <FilterBar filters={CATEGORIES} defineFilter={defineFilter} />
      <Notification />
      { view === 'list' && listView() }
      { view === 'tile' && tileView() }
    </>
  )
}

export default Groceries



