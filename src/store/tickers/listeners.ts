import { isAnyOf } from '@reduxjs/toolkit'

import type { StartListening } from '../listenerMiddleware'
import type { RootState } from '../store'

import { fetchTradingTickers } from './thunks'
import { getActiveTickers } from './selectors'
import { addSymbols, removeSymbols } from './streams'
import { setFilter } from './slice'

const updateSubscriptions = (oldState: RootState, newState: RootState) => {
  const oldSymbols = new Set(getActiveTickers(oldState).map(t => t.symbol))
  const newSymbols = new Set(getActiveTickers(newState).map(t => t.symbol))

  removeSymbols([...oldSymbols].filter(s => !newSymbols.has(s)))
  addSymbols([...newSymbols].filter(s => !oldSymbols.has(s)))
}

export const register = (startListening: StartListening) => {
  startListening({
    matcher: isAnyOf(fetchTradingTickers.fulfilled, setFilter),
    effect: (_, { getOriginalState, getState }) => {
      updateSubscriptions(getOriginalState(), getState())
    },
  })
}
