import { FC, memo } from 'react'
import cx from 'classnames'

import { PriceDirection } from '@/store/tickers/types'

import s from './Price.module.css'

export type PriceProps = {
  value: string
  dir: PriceDirection
}

const Price: FC<PriceProps> = ({ value, dir }) => (
  <div
    className={cx(s.price, {
      [s.flat]: dir === 0,
      [s.down]: dir === -1,
      [s.up]: dir === 1,
    })}
  >
    {value || '―'}
  </div>
)

export default memo(Price)
