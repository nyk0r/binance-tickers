import { FC, memo } from 'react'

import DeadIcon from '@/components/icons/DeadIcon'
import SpinnerIcon from '@/components/icons/SpinnerIcon'

import s from './Message.module.css'

export type MessageProps = {
  type: 'loading' | 'empty' | 'error'
}

const messages = {
  loading: {
    icon: (
      <div className={s.spinner}>
        <SpinnerIcon />
      </div>
    ),
    text: 'Loading...',
  },
  empty: {
    icon: <DeadIcon />,
    text: 'No results found',
  },
  error: {
    icon: <DeadIcon />,
    text: 'Something went wrong',
  },
}

const Message: FC<MessageProps> = ({ type }) => (
  <div className={s.message}>
    {messages[type].icon}
    <div>{messages[type].text}</div>
  </div>
)

export default memo(Message)
