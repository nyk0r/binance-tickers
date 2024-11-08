import { FC, memo } from 'react'
import cx from 'classnames'

import { Price as PriceData } from '@/store/tickers/types'

import s from './Price.module.css'

export type PriceProps = {
  value: PriceData
}

const Price: FC<PriceProps> = ({ value }) => (
  <div
    className={cx(s.price, {
      [s.flat]: value.dir === 0,
      [s.down]: value.dir === -1,
      [s.up]: value.dir === 1,
    })}
  >
    {value.price || '―'}
  </div>
)

export default memo(Price)
