import { updateProduct } from '../reducers/productReducer'
import { useDispatch } from 'react-redux'

const useProductCounter = (product) => {
  const dispatch = useDispatch()
  const MAX_COUNT = 99
  let count = product.quantity

  const inc = () => {
    if (count < MAX_COUNT) {
      dispatch(updateProduct(product.id, { ...product, quantity: product.quantity + 1 }))
    }
  }
  const dec = () => {
    if (count > 0) {
      dispatch(updateProduct(product.id, { ...product, quantity: product.quantity - 1 }))
    }
  }

  return {
    count,
    inc,
    dec
  }
}

export default useProductCounter