import { FC, memo } from 'react'

import { IconProps } from './types'

const ChevronRightIcon: FC<IconProps> = ({ color = 'currentColor' }) => (
  <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
    <path
      d='M6.25 12L10.25 8L6.25 4'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default memo(ChevronRightIcon)
