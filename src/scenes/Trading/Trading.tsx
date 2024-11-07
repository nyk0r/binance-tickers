import { FC, useEffect } from 'react'

import { useDispatch, useSelector } from '@/store'
import { fetchTradingTickers } from '@/store/tickers/thunks'
import { getIsError, getIsLoading, getActiveTickersInfo } from '@/store/tickers/selectors'

import Tickers from './Tickers'

const Trading: FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTradingTickers())
  }, [dispatch])

  const isLoading = useSelector(getIsLoading)
  const isError = useSelector(getIsError)
  const data = useSelector(getActiveTickersInfo)

  return (
    <div>
      {isLoading && 'Loading...'}
      {isError && 'Something went wrong'}
      {!(isLoading || isError) && data.length > 0 && <Tickers items={data} />}
    </div>
  )
}

export default Trading
