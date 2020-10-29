import productsService from '../services/products'

const userReducer = (state = null, action) => {
  switch (action.type) {
  case 'SET_USER':
    return action.user
  case 'CLEAR_USER':
    return null
  default:
    return state
  }
}

export const setUser = user => {
  window.localStorage.setItem('loggedGroceryIOUser', JSON.stringify(user))
  productsService.setToken(user.token)

  return {
    type: 'SET_USER',
    user,
  }
}

export const clearUser = () => {
  return {
    type: 'CLEAR_USER'
  }
}

export default userReducer