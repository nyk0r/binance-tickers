import { createAsyncThunk } from '@reduxjs/toolkit'
import { Ticker } from './types'

type SymbolDto = {
  symbol: string
  baseAsset: string
  orderTypes: string[]
}

type Dto = {
  symbols: SymbolDto[]
}

export const fetchTradingTickers = createAsyncThunk<{
  tickers: Ticker[]
  orderTypes: Record<string, string[]>
}>('tickers/FETCH_TRADING_TICKERS', () =>
  fetch(`${import.meta.env.VITE_API_BASE}/exchangeInfo?symbolStatus=TRADING`, {
    mode: 'cors',
    method: 'GET',
  }).then(async resp => {
    if (!resp.ok) throw new Error()

    const data = (await resp.json()) as Dto
    const tickers = data.symbols.map(s => ({
      symbol: s.symbol,
      baseAsset: s.baseAsset,
    }))
    const orderTypes = Object.fromEntries(data.symbols.map(s => [s.symbol, s.orderTypes]))
    tickers.sort((a, b) => {
      if (a.symbol === b.symbol) return 0
      if (a.symbol < b.symbol) return -1
      return 1
    })
    return {
      tickers,
      orderTypes,
    }
  }),
)
