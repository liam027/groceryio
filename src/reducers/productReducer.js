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

export const createProduct = (name, category, quantity) => {
  return {
    type: 'NEW_PRODUCT',
    data: {
      name,
      category,
      quantity: quantity
    }
  }
}

export const setProducts = (products) => {
  return {
    type: 'SET_PRODUCTS',
    data: products
  }
}

export default productReducer