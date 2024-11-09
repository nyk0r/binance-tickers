import { store } from '@/store'
import { setPrices } from './slice'

const ws = new WebSocket(import.meta.env.VITE_STREAMS_BASE)

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
    store.dispatch(
      setPrices({
        ticker: data.s,
        ask: data.a,
        bid: data.b,
      }),
    )
  }
})

const sendOrBuffer = (message: Parameters<typeof ws.send>[0]) => {
  if (ws.readyState === 1) {
    ws.send(message)
  } else {
    ws.addEventListener('open', () => ws.send(message))
  }
}

const messageQueue: object[] = []

const enqueuMessage = (msg: object) => {
  messageQueue.push(msg)
}

const sendMessage = () => {
  if (messageQueue.length !== 0) {
    sendOrBuffer(JSON.stringify(messageQueue.shift()))
  }
  setTimeout(sendMessage, 1000 / 5) // 5 message per second
}
sendMessage()

export const addSymbols = (symbols: string[]) => {
  if (symbols.length === 0) return

  enqueuMessage({
    method: 'SUBSCRIBE',
    params: symbols.map(s => `${s.toLowerCase()}@bookTicker`),
    id: null,
  })
}

export const removeSymbols = (symbols: string[]) => {
  if (symbols.length === 0) return

  enqueuMessage({
    method: 'UNSUBSCRIBE',
    params: symbols.map(s => `${s.toLowerCase()}@bookTicker`),
    id: null,
  })
}
