import React, { useState } from 'react'
import SearchInput from '../../components/SearchInput'
import SearchResult from '../../components/SearchResult'

const Search = () => {

  const [result, setResult] = useState([])

  return (
    <div className='flex flex-col gap-2 h-full'>
      <SearchInput result={result} setResult={setResult}/>
      <SearchResult result={result}/>
    </div>
  )
}

export default Search