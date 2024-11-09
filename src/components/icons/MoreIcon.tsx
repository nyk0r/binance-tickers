import { FC, memo } from 'react'

import { IconProps } from './types'

const MoreIcon: FC<IconProps> = ({ color = 'currentColor' }) => (
  <svg width='16' height='16' viewBox='0 0 16 16' fill={color}>
    <path
      d='M8.49999 8.66666C8.86818 8.66666 9.16666 8.36818 9.16666 7.99999C9.16666 7.63181 8.86818 7.33333 8.49999 7.33333C8.13181 7.33333 7.83333 7.63181 7.83333 7.99999C7.83333 8.36818 8.13181 8.66666 8.49999 8.66666Z'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M13.1667 8.66666C13.5349 8.66666 13.8333 8.36818 13.8333 7.99999C13.8333 7.63181 13.5349 7.33333 13.1667 7.33333C12.7985 7.33333 12.5 7.63181 12.5 7.99999C12.5 8.36818 12.7985 8.66666 13.1667 8.66666Z'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M3.83334 8.66666C4.20153 8.66666 4.50001 8.36818 4.50001 7.99999C4.50001 7.63181 4.20153 7.33333 3.83334 7.33333C3.46515 7.33333 3.16667 7.63181 3.16667 7.99999C3.16667 8.36818 3.46515 8.66666 3.83334 8.66666Z'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default memo(MoreIcon)
