import { FC, memo } from 'react'

import { TickerInfo } from '@/store/tickers/types'

export type TickersProps = {
  items: readonly TickerInfo[]
}

const Tickers: FC<TickersProps> = ({ items }) => (
  <table>
    <thead>
      <tr>
        <th>Symbol</th>
        <th>Bid</th>
        <th>Ask</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => 
        <tr key={item.ticker}>
          <td>{item.ticker}</td>
          <td>{item.prices.bid.price}</td>
          <td>{item.prices.ask.price}</td>
          <td>{item.ordersTypes.join(', ')}</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default memo(Tickers)