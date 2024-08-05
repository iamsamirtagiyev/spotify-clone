import React from 'react'

const Header = ({data}) => {
  return (
    <header className='p-5 h-56 flex flex-col gap-3 justify-end rounded-t-md !bg-cover !bg-center' style={{background: `linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(${data.images[0].url})`}}>
        <h1 className='text-5xl font-bold'>{data.name}</h1>
        <p className='text-white/40 text-lg font-medium'>{data.description}</p>
    </header>
  )
}

export default Header