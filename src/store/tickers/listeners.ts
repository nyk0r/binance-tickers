import type { StartListening } from '../listenerMiddleware'
import { fetchTradingTickers } from './thunks'
import { getActiveTickers } from './selectors'
import { addSymbols, removeSymbols } from './streams'

export const register = (startListening: StartListening) => {
  startListening({
    actionCreator: fetchTradingTickers.fulfilled,
    effect: (_, { getState }) => {
      const state = getState()
      const tickers = getActiveTickers(state).map(t => t.symbol)
      addSymbols(tickers)
    },
  })
}
