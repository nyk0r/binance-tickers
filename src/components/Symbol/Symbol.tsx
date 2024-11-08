import { FC, memo } from 'react'

export type SymbolProps = {
  symbol: string
  base: string
}

const Symbol: FC<SymbolProps> = ({ symbol, base }) => symbol.replace(base, base + '/')

export default memo(Symbol)
