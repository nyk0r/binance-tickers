import { FC, useEffect, useCallback } from 'react'
import debounce from 'debounce'

import { useDispatch, useSelector } from '@/store'
import { fetchTradingTickers } from '@/store/tickers/thunks'
import { getIsError, getIsLoading, getActiveTickersInfo } from '@/store/tickers/selectors'
import { setFilter } from '@/store/tickers/slice'

import Search from '@/components/Search'

import Tickers from './Tickers'

const Trading: FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTradingTickers())
  }, [dispatch])

  const isLoading = useSelector(getIsLoading)
  const isError = useSelector(getIsError)
  const data = useSelector(getActiveTickersInfo)

  const handleSearch = useCallback(
    debounce((value: string) => {
      dispatch(setFilter(value))
    }, 100),
    [dispatch],
  )

  return (
    <div>
      {isLoading && 'Loading...'}
      {isError && 'Something went wrong'}
      {!(isLoading || isError) && (
        <>
          <Search onChange={handleSearch} />
          <Tickers items={data} />
        </>
      )}
    </div>
  )
}

export default Trading
