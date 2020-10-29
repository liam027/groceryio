import { useDispatch, useSelector } from 'react-redux'
import FilterBar from './FilterBar'
import ListView from './ListView'
import Notification from './Notification'
import React from 'react'
import TileView from './TileView'
import { setFilter } from '../reducers/filterReducer'

const Groceries = () => {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter)
  const products = useSelector(state => state.products)
  const view = useSelector(state => state.view)

  const CATEGORIES = [
    'all',
    'produce',
    'dairy',
    'frozen',
    'meat',
  ]

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


