import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/store/store'
import { TickerInfo, Ticker } from './types.ts'

const getRaw = (state: RootState) => state.tickers

const getFilteredTickers = createSelector([getRaw], ({ tickers, filer }) =>
  tickers.filter(t => t.symbol.includes(filer.toUpperCase())),
)

export const getActiveTickers = createSelector(
  [getRaw, getFilteredTickers],
  ({ paging }, tickers): Ticker[] =>
    tickers.slice(paging.size * paging.active, paging.size * paging.active + paging.size),
)

export const getActiveTickersInfo = createSelector(
  [getRaw, getActiveTickers],
  ({ prices, ordersTypes }, tickers): TickerInfo[] =>
    tickers.map(ticker => ({
      ticker,
      ordersTypes: ordersTypes[ticker.symbol] ?? [],
      prices: prices[ticker.symbol] ?? {
        ask: { price: '', dir: 0 },
        bid: { price: '', dir: 0 },
      },
    })),
)

export const getPaging = createSelector([getRaw, getFilteredTickers], ({ paging }, tickers) => ({
  ...paging,
  totalPages: Math.ceil(tickers.length / paging.size),
  total: tickers.length,
}))

export const getIsLoading = createSelector([getRaw], ({ loading }) => loading)

export const getIsError = createSelector([getRaw], ({ error }) => error)
