const viewReducer = (state = 'tile', action) => {
  switch (action.type) {
  case 'SET_VIEW':
    return action.view
  default:
    return state
  }
}

export const setView = view => {
  return {
    type: 'SET_VIEW',
    view,
  }
}

export default viewReducer