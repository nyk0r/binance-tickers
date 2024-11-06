import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/store/store'
import { TickerInfo } from './types.ts'

const getRaw = (state: RootState) => state.tickers

export const getActiveTickers = createSelector([getRaw], ({ tickers, paging }): string[] =>
  tickers.slice(paging.size * paging.active, paging.size),
)

export const getActiveTickersInfo = createSelector(
  [getRaw, getActiveTickers],
  ({ prices, ordersTypes }, tickers): TickerInfo[] =>
    tickers.map(ticker => ({
      ticker,
      ordersTypes: ordersTypes[ticker] ?? [],
      prices: prices[ticker] ?? {
        ask: { price: 0, dir: 0 },
        bid: { price: 0, dir: 0 },
      },
    })),
)

export const getIsLoading = createSelector([getRaw], ({ loading }) => loading)

export const getIsError = createSelector([getRaw], ({ error }) => error)
