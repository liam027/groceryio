import productService from '../services/products'

const productReducer = (state = [], action) => {
  switch (action.type) {
  case 'NEW_PRODUCT':
    return state.concat(action.data)
  case 'DELETE_PRODUCT':
    return state.filter((product) => product.id !== action.data)
  case 'SET_PRODUCTS':
    return action.data
  default:
    return state
  }
}

export const createProduct = (data) => {
  return async dispatch => {
    const newProduct = await productService.create(data)
    dispatch({
      type: 'NEW_PRODUCT',
      data: newProduct
    })
  }
}

export const initProducts = () => {
  return async dispatch => {
    const products = await productService.getAll()
    dispatch({
      type: 'SET_PRODUCTS',
      data: products
    })
  }
}

export const setProducts = (products) => {
  return {
    type: 'SET_PRODUCTS',
    data: products
  }
}

export const deleteProduct = (id) => {
  return async dispatch => {
    const deletedProduct = await productService.deleteProduct(id)
    dispatch({
      type: 'DELETE_PRODUCT',
      data: deletedProduct
    })
  }
}

export default productReducer