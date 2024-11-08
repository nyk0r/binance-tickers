import { FC, memo } from 'react'

import { TickerInfo } from '@/store/tickers/types'

import DeadIcon from '@/components/icons/DeadIcon'
import Symbol from '@/components/Symbol'
import Price from '@/components/Price'

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
          <tr key={item.ticker.symbol}>
            <td>
              <Symbol symbol={item.ticker.symbol} base={item.ticker.baseAsset} />
            </td>
            <td>
              <Price value={item.prices.bid.price} dir={item.prices.bid.dir} />
            </td>
            <td>
              <Price value={item.prices.ask.price} dir={item.prices.ask.dir} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default memo(Tickers)
