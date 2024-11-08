export type PriceDirection = -1 | 0 | 1

export type Price = {
  price: string
  dir: PriceDirection
}

export type TickerPrice = {
  ask: Price
  bid: Price
}

export type Paging = {
  active: number
  size: number
}

export type Ticker = {
  symbol: string
  baseAsset: string
}

export type State = {
  tickers: readonly Ticker[]
  ordersTypes: Partial<Record<string, readonly string[]>>
  prices: Partial<Record<string, TickerPrice>>

  filer: string
  paging: Paging

  loading: boolean
  error: boolean
}

export type TickerInfo = {
  ticker: Ticker
  ordersTypes: readonly string[]
  prices: TickerPrice
}
