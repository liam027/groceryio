import { useState } from 'react'

const useCounter = (initialCount) => {
  const MAX_COUNT = 99
  const [count, setCount] = useState(initialCount)

  const inc = () => {
    if (count < MAX_COUNT) {
      setCount(count + 1)
    }
  }
  const dec = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return {
    count,
    inc,
    dec
  }
}

export default useCounter