import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchTradingTickers = createAsyncThunk<{
  tickers: string[]
  orderTypes: Record<string, string[]>
}>('tickers/FETCH_TRADING_TICKERS', () =>
  fetch('https://api.binance.com/api/v3/exchangeInfo?symbolStatus=TRADING', {
    mode: 'cors',
    method: 'GET',
  }).then(async resp => {
    if (!resp.ok) throw new Error()

    const data = await resp.json()
    const orderTypes = Object.fromEntries(data.symbols.map((s: any) => [s.symbol, s.orderTypes]))
    return {
      tickers: Object.keys(orderTypes).sort(),
      orderTypes,
    }
  }),
)
