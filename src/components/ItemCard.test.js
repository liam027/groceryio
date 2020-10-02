import ItemCard from './ItemCard'
import prettyDOM from '@testing-library/dom'
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('<ItemCard />', () => {
  let product, mockHandler, component

  beforeEach(() => {
    product = {
      'name': 'rice',
      'category': 'produce',
      'quantity': 0,
      'id': 4
    }
    mockHandler = jest.fn()

    component = render(
      <ItemCard product={product} deleteProduct={mockHandler} />
    )
  })

  test('renders content', () => {
    const nameDiv = component.container.querySelector('.name')

    expect(nameDiv).toHaveTextContent(
      'RICE'
    )
  })

  test('clicking the delete button calls the delete callback', () => {
    const button = component.container.querySelector('.delete')
    fireEvent.click(button)

    expect(mockHandler.mock.calls).toHaveLength(1)
  })

})