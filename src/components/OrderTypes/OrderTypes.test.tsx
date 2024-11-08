import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import OrderTypes from './OrderTypes'

describe('components/OrderTypes', () => {
  it('renders availbale order types with transformation', () => {
    render(<OrderTypes orders={['LIMIT', 'TAKE_PROFIT_LIMIT']} />)
    screen.getByText('Limit')
    screen.getByText('Take profit limit')
  })
})
