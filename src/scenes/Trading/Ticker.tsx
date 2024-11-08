import { FC, memo, useState } from 'react'
import cx from 'classnames'

import { TickerInfo } from '@/store/tickers/types'

import Symbol from '@/components/Symbol'
import Price from '@/components/Price'
import OrdersList from '@/components/OrdersList'
import ChevronRightIcon from '@/components/icons/ChevronRightIcon'

import s from './Tickers.module.css'

export type TickersProps = {
  value: TickerInfo
}

const Ticker: FC<TickersProps> = ({ value }) => {
  const [opened, setOpened] = useState(false)

  return (
    <>
      <tr
        className={cx(s.main, { [s.opened]: opened })}
        key={value.ticker.symbol}
        onClick={() => setOpened(prev => !prev)}
      >
        <td>
          <span className={s.chevron}>
            <ChevronRightIcon />
          </span>
          <Symbol symbol={value.ticker.symbol} base={value.ticker.baseAsset} />
        </td>
        <td>
          <Price value={value.prices.bid} />
        </td>
        <td>
          <Price value={value.prices.ask} />
        </td>
      </tr>
      {opened && (
        <tr>
          <td className={s.details} colSpan={3}>
            <OrdersList orders={value.ordersTypes} />
          </td>
        </tr>
      )}
    </>
  )
}

export default memo(Ticker)
