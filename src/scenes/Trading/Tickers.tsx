import { FC, memo } from 'react'

import { TickerInfo } from '@/store/tickers/types'

import DeadIcon from '@/components/icons/DeadIcon'
import Ticker from './Ticker'

import s from './Tickers.module.css'

export type TickersProps = {
  items: readonly TickerInfo[]
}

const Empty = () => (
  <div className={s.empty}>
    <DeadIcon />
    <div>No results found</div>
  </div>
)

const Tickers: FC<TickersProps> = ({ items }) => {
  if (items.length === 0) return <Empty />

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
          <Ticker value={item} />
        ))}
      </tbody>
    </table>
  )
}

export default memo(Tickers)
