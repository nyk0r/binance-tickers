import { store } from '@/store'
import { setPrices } from './slice'

const ws = new WebSocket('wss://stream.binance.com:9443/ws')

type BookMessage = {
  u: string
  s: string
  b: string
  B: string
  a: string
  A: string
}

function isBookMessage(x: object): x is BookMessage {
  return 's' in x && 'b' in x && 'a' in x
}

ws.addEventListener('error', e => {
  console.error('ws error: ', e)
})

ws.addEventListener('message', e => {
  if (typeof e.data !== 'string') return

  const data = JSON.parse(e.data)
  if (isBookMessage(data)) {
    store.dispatch(setPrices({
      ticker: data.s,
      ask: parseFloat(data.a),
      bid: parseFloat(data.b),
    }))
  }
})

const sendOrBuffer = (message: Parameters<typeof ws.send>[0]) => {
  if (ws.readyState === 1) {
    ws.send(message)
  } else {
    ws.addEventListener('open', () => ws.send(message))
  }
}

export const addSymbols = (symbols: string[]) => {
  sendOrBuffer(
    JSON.stringify({
      method: 'SUBSCRIBE',
      params: symbols.map(s => `${s.toLowerCase()}@bookTicker`),
      id: null,
    }),
  )
}

export const removeSymbols = (symbols: string[]) => {
  sendOrBuffer(
    JSON.stringify({
      method: 'UNSUBSCRIBE',
      params: symbols.map(s => `${s.toLowerCase()}@bookTicker`),
      id: null,
    }),
  )
}
