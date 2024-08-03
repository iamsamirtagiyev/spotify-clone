import React from 'react'
import { HomeIcon, LibraryIcon, SearchIcon } from '../icons'
import { NavLink } from 'react-router-dom'

const MenuList = () => {

    const menuItems = [
        {
            name: 'Home',
            path: '/',
            icon: <HomeIcon className='w-7 h-7'/>
        },
        {
            name: 'Search',
            path: '/search',
            icon: <SearchIcon className='w-7 h-7'/>
        },
    ]

  return (
    <div className='bg-zinc-900 sm:rounded-md p-5 flex justify-between sm:flex-col gap-5'>
        {
            menuItems.map((menu, key) => (
                <NavLink key={key} to={menu.path} className='flex items-center gap-2 opacity-80 hover:opacity-100'>
                    <span>{menu.icon}</span>
                    <span className='font-medium hidden md:block text-lg hover:underline'>{menu.name}</span>
                </NavLink>
            ))
        }
        <NavLink to='/library' className='flex items-center gap-2 opacity-80 hover:opacity-100 sm:hidden'>
            <span>
                <LibraryIcon className='w-7 h-7' />
            </span>
        </NavLink>
    </div>
  )
}

export default MenuList