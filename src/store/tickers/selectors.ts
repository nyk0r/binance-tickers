import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/store/store'
import { TickerInfo, Ticker } from './types.ts'

const getRaw = (state: RootState) => state.tickers

export const getActiveTickers = createSelector([getRaw], ({ tickers, filer, paging }): Ticker[] =>
  tickers
    .filter(t => t.symbol.includes(filer.toUpperCase()))
    .slice(paging.size * paging.active, paging.size),
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

export const getIsLoading = createSelector([getRaw], ({ loading }) => loading)

export const getIsError = createSelector([getRaw], ({ error }) => error)
