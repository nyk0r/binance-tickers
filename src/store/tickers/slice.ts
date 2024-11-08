import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { Decimal } from 'decimal.js'

import { State, Price } from './types'
import { fetchTradingTickers } from './thunks'

const getDir = (newPrice: string, oldPrice: Price) => {
  const op = new Decimal(oldPrice.price)
  const np = new Decimal(newPrice)

  if (np.eq(op)) return oldPrice.dir
  if (np.lt(op)) return -1
  return 1
}

export const initialState: State = {
  tickers: [],
  ordersTypes: {},
  prices: {},

  filer: '',
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
        ask: string
        bid: string
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
    setFilter: (state, { payload }: PayloadAction<string>) => {
      state.filer = payload
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

export const { setPrices, setFilter } = slice.actions
