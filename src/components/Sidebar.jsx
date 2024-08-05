import React from 'react'
import MenuList from './MenuList'
import Library from './Library'

const Sidebar = () => {
  return (
    <aside className='flex flex-col gap-2 order-2 sm:order-first md:w-64 md:min-w-64'>
        <MenuList/>
        <Library/>
    </aside>
  )
}

export default Sidebar