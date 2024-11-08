import { FC, memo, useState } from 'react'

import SearchIcon from '@/components/icons/SearchIcon'

import s from './Search.module.css'

export type SearchProps = {
  initialValue?: string
  onChange?: (value: string) => void
}

const Search: FC<SearchProps> = ({ initialValue, onChange }) => {
  const [value, setValue] = useState(initialValue ?? '')

  return (
    <div className={s.search}>
      <div className={s.decor}>
        <SearchIcon />
      </div>
      <input
        type='string'
        value={value}
        placeholder='Search'
        className={s.input}
        onChange={e => {
          setValue(e.target.value)
          onChange && onChange(e.target.value)
        }}
      />
    </div>
  )
}

export default memo(Search)
