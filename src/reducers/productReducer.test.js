import productReducer from './productReducer'
import deepFreeze from 'deep-freeze'

describe('productReducer', () => {
  test('returns new state with action NEW_PRODUCT', () => {
    const state = []
    const action = {
      type: 'NEW_PRODUCT',
      data: {
        content: 'kiwi',
        category: 'frozen'
      }
    }

    deepFreeze(state)
    const newState = productReducer(state, action)

    expect(newState).toHaveLength(1)
    expect(newState).toContainEqual(action.data)
  })
})