import React from 'react'

const SearchInput = ({result, setResult}) => {
  return (
    <div className='h-16 min-h-16 rounded-md bg-zinc-900 flex items-center justify-center px-5'>
        <input value={result} onChange={e => setResult(e.target.value)} className='w-full outline-0 bg-zinc-700 rounded-full text-xl h-11 border-2 border-transparent transition-all duration-500 px-5 focus:border-white/50 capitalize font-medium' placeholder='search...' type="text" />
    </div>
  )
}

export default SearchInput