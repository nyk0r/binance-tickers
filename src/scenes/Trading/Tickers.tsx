import { FC, memo } from 'react'

import { TickerInfo } from '@/store/tickers/types'

import Message from '@/components/Message'
import Ticker from './Ticker'

import s from './Tickers.module.css'

export type TickersProps = {
  items: readonly TickerInfo[]
}

const Tickers: FC<TickersProps> = ({ items }) => {
  if (items.length === 0) return <Message type='empty' />

  return (
    <table className={s.tickers}>
      <thead>
        <tr>
          <th style={{ width: '50%' }}>Symbol</th>
          <th style={{ width: '25%' }}>Bid</th>
          <th style={{ width: '25%' }}>Ask</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <Ticker value={item} key={item.ticker.symbol} />
        ))}
      </tbody>
    </table>
  )
}

export default memo(Tickers)
