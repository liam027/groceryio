const categoriesReducer = (state = ['produce', 'frozen', 'dairy', 'meat'], action) => {
  switch (action.type) {
  case 'ADD_CATEGORY':
    return state.push(action.category)
  default:
    return state
  }
}

export const addCategory = category => {
  return {
    type: 'ADD_CATEGORY',
    category,
  }
}

export default categoriesReducer