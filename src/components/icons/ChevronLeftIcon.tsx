import { FC, memo } from 'react'

import { IconProps } from './types'

const ChevronLeftIcon: FC<IconProps> = ({ color = 'currentColor' }) => (
  <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
    <path
      d='M10.75 12L6.75 8L10.75 4'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default memo(ChevronLeftIcon)
