import { configureStore, combineReducers } from '@reduxjs/toolkit'

import tickers from './tickers/slice'

import { listenerMiddleware } from './listenerMiddleware'

const rootReducer = combineReducers({ tickers })

export type RootState = ReturnType<typeof rootReducer>

export const createStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().prepend(listenerMiddleware.middleware),
  })

export type AppDispatch = ReturnType<typeof createStore>['dispatch']

export const store = createStore()
