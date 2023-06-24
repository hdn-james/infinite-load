import React, { useEffect, useState } from 'react'
// hook
import { useDebounce } from '@/hooks/useDebounce'
// type
import { ISearchProps } from '@/types/search'

const Search: React.FC<ISearchProps> = ({ onSearchQueryChange }) => {
  const [inputValue, setInputValue] = useState<string>('')

  // handle on search query change
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  // debounce input value 300ms
  const debouncedValue = useDebounce<string>(inputValue, 300)

  // set search query
  // trigger when debounceValue change
  useEffect(() => {
    onSearchQueryChange(debouncedValue)
  }, [debouncedValue])

  return (
    <div className='my-6'>
      <input
        value={inputValue}
        onChange={onInputChange}
        className='w-full border px-2 py-1'
        placeholder='Type something to search... '
      />
    </div>
  )
}

export default Search
