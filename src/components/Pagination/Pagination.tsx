import { FC, memo } from 'react'

import { Pagination as HeadlessPagination } from 'react-headless-pagination'

import ChevronLeftIcon from '@/components/icons/ChevronLeftIcon'
import ChevronRightIcon from '@/components/icons/ChevronRightIcon'

import s from './Pagination.module.css'

export type PaginationProps = {
  totalPages: number
  currentPage: number
  onChange: (page: number) => void
}

const Pagination: FC<PaginationProps> = ({ totalPages, currentPage, onChange }) => {
  if (totalPages <= 1) return null

  return (
    <HeadlessPagination
      totalPages={totalPages}
      currentPage={currentPage}
      setCurrentPage={onChange}
      className={s.pagination}
      truncableText='•'
      truncableClassName={s.trancate}
      edgePageCount={2}
      middlePagesSiblingCount={1}
    >
      <HeadlessPagination.PrevButton className={s.arrow}>
        <ChevronLeftIcon />
      </HeadlessPagination.PrevButton>

      <nav className={s.nav}>
        <ul className={s.btns}>
          <HeadlessPagination.PageButton
            as={<button />}
            activeClassName={s.active}
            className={s.btn}
          />
        </ul>
      </nav>

      <HeadlessPagination.NextButton className={s.arrow}>
        <ChevronRightIcon />
      </HeadlessPagination.NextButton>
    </HeadlessPagination>
  )
}

export default memo(Pagination)
