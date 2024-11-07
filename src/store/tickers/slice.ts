import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { State, Price } from './types'
import { fetchTradingTickers } from './thunks'

const getDir = (newPrice: number, oldPrice: Price) => {
  if (newPrice === oldPrice.price) return oldPrice.dir
  if (newPrice < oldPrice.price) return -1
  return 1
}

export const initialState: State = {
  tickers: [],
  ordersTypes: {},
  prices: {},

  paging: {
    active: 0,
    size: 10,
  },

  loading: false,
  error: false,
}

const slice = createSlice({
  name: 'tickers',
  initialState,
  reducers: {
    setPrices: (
      state,
      {
        payload,
      }: PayloadAction<{
        ticker: string
        ask: number
        bid: number
      }>,
    ) => {
      const prevPrice = state.prices[payload.ticker]
      if (!prevPrice) {
        state.prices[payload.ticker] = {
          ask: { price: payload.ask, dir: 0 },
          bid: { price: payload.bid, dir: 0 },
        }
      } else {
        if (payload.ask === prevPrice.ask.price && payload.bid === prevPrice.bid.price) return

        state.prices[payload.ticker] = {
          ask: { price: payload.ask, dir: getDir(payload.ask, prevPrice.ask) },
          bid: { price: payload.bid, dir: getDir(payload.bid, prevPrice.bid) },
        }
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchTradingTickers.pending, state => {
      state.error = false
      state.loading = true
    })
    builder.addCase(fetchTradingTickers.rejected, state => {
      state.error = true
      state.loading = false
    })
    builder.addCase(fetchTradingTickers.fulfilled, (state, { payload }) => {
      state.error = false
      state.loading = false
      state.tickers = payload.tickers
      state.ordersTypes = payload.orderTypes
    })
  },
})

export default slice.reducer

export const { setPrices } = slice.actions
