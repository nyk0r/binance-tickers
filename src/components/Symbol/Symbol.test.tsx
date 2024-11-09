import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import Symbol from './Symbol'

describe('components/Symbol', () => {
  it('renders trading symbol with transformation', () => {
    render(<Symbol symbol='XAUUSD' base='XAU' />)
    screen.getByText('XAU/USD')
  })
})
