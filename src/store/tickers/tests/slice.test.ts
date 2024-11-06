import { describe, it, expect } from 'vitest'

import reducer, { setPrices, initialState } from '../slice'
import {TickerPrice} from '../types'

describe('store/tickers/slice', () => {
  describe('#setPrice', () => {
    it('sets prices for new and existing tickers', () => {
      const firstPrice = reducer(initialState, setPrices({
        ask: 30,
        bid: 25,
        ticker: 'ETHBTC'
      }))
      expect(firstPrice.prices).toEqual({
        'ETHBTC': {
          ask: {
            price: 30,
            dir: 0,
          }, 
          bid: {
            price: 25,
            dir: 0,
          }
        } as TickerPrice
      })
      const samePrice = reducer(firstPrice, setPrices({
        ask: 30,
        bid: 25,
        ticker: 'ETHBTC'
      }))
      expect(samePrice.prices).toEqual({
        'ETHBTC': {
          ask: {
            price: 30,
            dir: 0,
          }, 
          bid: {
            price: 25,
            dir: 0,
          }
        } as TickerPrice
      })
      const newPrice = reducer(firstPrice, setPrices({
        ask: 29,
        bid: 27,
        ticker: 'ETHBTC'
      }))
      expect(newPrice.prices).toEqual({
        'ETHBTC': {
          ask: {
            price: 29,
            dir: -1,
          }, 
          bid: {
            price: 27,
            dir: 1,
          }
        } as TickerPrice
      })
    })
  })
})