import { render, screen } from '@testing-library/react'
import Todo from './Todo'
import { expect, test } from 'vitest'

test('renders todo text', () => {
  const todo = {
    text: 'Test this component',
    done: false
  }

  render(<Todo todo={todo} />)

  const element = screen.getByText('Test this component')
  expect(element).toBeDefined()
})
