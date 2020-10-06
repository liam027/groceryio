const productReducer = (state = [], action) => {
  switch (action.type) {
  case 'NEW_PRODUCT':
    return state.concat(action.data)
  case 'SET_PRODUCTS':
    return action.data
  default:
    return state
  }
}

export const createProduct = (data) => {
  return {
    type: 'NEW_PRODUCT',
    data: data
  }
}

export const setProducts = (products) => {
  return {
    type: 'SET_PRODUCTS',
    data: products
  }
}

export default productReducer