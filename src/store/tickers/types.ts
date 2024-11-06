export type PriceDirection = -1 | 0 | 1

export type Price = {
  price: number
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

export type State = {
  tickers: readonly string[]
  ordersTypes: Partial<Record<string, readonly string[]>>
  prices: Partial<Record<string, TickerPrice>>

  paging: Paging

  loading: boolean
  error: boolean
}

export type TickerInfo = {
  ticker: string
  ordersTypes: readonly string[]
  prices: TickerPrice
}
