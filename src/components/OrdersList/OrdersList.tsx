import { FC, memo } from 'react'

import s from './OrdersList.module.css'

export type OrdersListProps = {
  orders: readonly string[]
}

const toReadable = (order: string) => {
  const lower = order.toLocaleLowerCase().split(/_/g).join(' ')
  return lower[0].toLocaleUpperCase() + lower.substring(1)
}

const OrdersList: FC<OrdersListProps> = ({ orders }) => (
  <div className={s.list}>
    {orders.map(o => (
      <div className={s.order}>{toReadable(o)}</div>
    ))}
  </div>
)

export default memo(OrdersList)
