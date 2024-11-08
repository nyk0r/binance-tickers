import { FC, memo } from 'react'

import { IconProps } from './types'

const SearchIncon: FC<IconProps> = ({ fill = 'currentColor' }) => (
  <svg width='16' height='16' viewBox='0 0 16 16' fill={fill}>
    <path d='M14.5306 13.9693L11.5625 11C12.4524 9.84027 12.8679 8.38547 12.7247 6.93069C12.5814 5.47591 11.8902 4.13008 10.7912 3.16622C9.69212 2.20236 8.2676 1.69263 6.80657 1.74045C5.34554 1.78827 3.95739 2.39004 2.92373 3.4237C1.89007 4.45736 1.2883 5.84551 1.24048 7.30654C1.19266 8.76757 1.70239 10.1921 2.66625 11.2911C3.63011 12.3902 4.97594 13.0814 6.43072 13.2247C7.8855 13.3679 9.3403 12.9524 10.5 12.0625L13.4706 15.0337C13.5404 15.1035 13.6232 15.1588 13.7144 15.1966C13.8055 15.2343 13.9032 15.2538 14.0019 15.2538C14.1005 15.2538 14.1982 15.2343 14.2894 15.1966C14.3805 15.1588 14.4634 15.1035 14.5331 15.0337C14.6029 14.964 14.6582 14.8811 14.696 14.79C14.7337 14.6988 14.7532 14.6011 14.7532 14.5025C14.7532 14.4038 14.7337 14.3061 14.696 14.215C14.6582 14.1238 14.6029 14.041 14.5331 13.9712L14.5306 13.9693ZM2.75001 7.49998C2.75001 6.65941 2.99926 5.83771 3.46626 5.1388C3.93326 4.43989 4.59702 3.89516 5.3736 3.57349C6.15019 3.25182 7.00472 3.16765 7.82914 3.33164C8.65356 3.49563 9.41084 3.9004 10.0052 4.49477C10.5996 5.08914 11.0044 5.84642 11.1683 6.67084C11.3323 7.49526 11.2482 8.34979 10.9265 9.12638C10.6048 9.90297 10.0601 10.5667 9.36118 11.0337C8.66227 11.5007 7.84058 11.75 7.00001 11.75C5.87319 11.7488 4.79286 11.3007 3.99608 10.5039C3.1993 9.70712 2.75116 8.62679 2.75001 7.49998Z' />
  </svg>
)

export default memo(SearchIncon)