import { FC, memo } from 'react'

import { TickerInfo } from '@/store/tickers/types'

import Symbol from '@/components/Symbol'

import s from './Tickers.module.css'

export type TickersProps = {
  items: readonly TickerInfo[]
}

const Tickers: FC<TickersProps> = ({ items }) => (
  <table className={s.tickers}>
    <thead>
      <tr>
        <th style={{ width: '56%' }}>Symbol</th>
        <th style={{ width: '27%' }}>Bid</th>
        <th style={{ width: '27%' }}>Ask</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
        <tr key={item.ticker.symbol}>
          <td>
            <Symbol symbol={item.ticker.symbol} base={item.ticker.baseAsset} />
          </td>
          <td>{item.prices.bid.price}</td>
          <td>{item.prices.ask.price}</td>
        </tr>
      ))}
    </tbody>
  </table>
)

export default memo(Tickers)
