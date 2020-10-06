import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ProductForm from './ProductForm'

test('<ProductForm /> updates parent state and calls onSubmit', () => {
  const addProduct = jest.fn()

  const component = render(
    <ProductForm addProduct={addProduct} />
  )

  const input = component.container.querySelector('input')
  const form = component.container.querySelector('form')

  fireEvent.change(input, {
    target: { value: 'new product' }
  })
  fireEvent.submit(form)

  expect(addProduct.mock.calls).toHaveLength(1)
  expect(addProduct.mock.calls[0][0].name).toBe('new product')
})