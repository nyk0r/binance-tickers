import { createListenerMiddleware, type TypedStartListening } from '@reduxjs/toolkit'

import type { RootState, AppDispatch } from './store'

import { register as registerTickersListeners } from './tickers/listeners'

export const listenerMiddleware = createListenerMiddleware()

export type StartListening = TypedStartListening<RootState, AppDispatch>

export const startListening = listenerMiddleware.startListening as StartListening

registerTickersListeners(startListening)
