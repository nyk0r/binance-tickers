import { FC, useEffect, useCallback } from 'react'
import debounce from 'debounce'

import { useDispatch, useSelector } from '@/store'
import { fetchTradingTickers } from '@/store/tickers/thunks'
import {
  getIsError,
  getIsLoading,
  getActiveTickersInfo,
  getPaging,
} from '@/store/tickers/selectors'
import { setFilter, setActivePage } from '@/store/tickers/slice'

import Search from '@/components/Search'
import Pagination from '@/components/Pagination'
import Message from '@/components/Message'

import Tickers from './Tickers'

import s from './Tickers.module.css'

const Trading: FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTradingTickers())
  }, [dispatch])

  const isLoading = useSelector(getIsLoading)
  const isError = useSelector(getIsError)
  const data = useSelector(getActiveTickersInfo)
  const paging = useSelector(getPaging)

  const handleSearch = useCallback(
    debounce((value: string) => {
      dispatch(setFilter(value))
    }, 100),
    [dispatch],
  )

  const handleSetAcivePage = useCallback(
    (page: number) => {
      dispatch(setActivePage(page))
    },
    [dispatch],
  )

  return (
    <>
      {isLoading && <Message type='loading' />}
      {isError && <Message type='error' />}
      {!(isLoading || isError) && (
        <>
          <div className={s.content}>
            <Search onChange={handleSearch} />
            <Tickers items={data} />
          </div>
          <Pagination
            currentPage={paging.active}
            totalPages={paging.totalPages}
            onChange={handleSetAcivePage}
          />
        </>
      )}
    </>
  )
}

export default Trading
