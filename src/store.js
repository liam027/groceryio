import { createStore, combineReducers, applyMiddleware } from 'redux'
import filterReducer from './reducers/filterReducer'
import messageReducer from './reducers/messageReducer'
import productReducer from './reducers/productReducer'
import thunk from 'redux-thunk'
import userReducer from './reducers/userReducer'
import viewReducer from './reducers/viewReducer'

const reducer = combineReducers({
  products: productReducer,
  filter: filterReducer,
  user: userReducer,
  message: messageReducer,
  view: viewReducer
})
const store = createStore(reducer, applyMiddleware(thunk))

export default store