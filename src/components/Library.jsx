import React from 'react'
import { AddIcon, ArrowIcon, LibraryIcon } from '../icons'
import { FaHeart } from "react-icons/fa6";
import { BsFillPinAngleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Library = () => {
  const { favoriteTracks } = useSelector(state => state.favorite)
  return (
    <div className='sm:rounded-md py-5 px-2 bg-zinc-900 hidden sm:flex h-full flex-col'>
        <div className='flex items-center justify-center px-2 md:justify-between w-full'>
            <Link to='/favorites' className='flex gap-2 items-center opacity-80 hover:opacity-100 cursor-pointer'>
                <LibraryIcon className='w-6 h-6' />
                <span className='font-medium hidden md:block'>Your Library</span>
            </Link>
            <div className='md:flex items-center hidden'>
                <button className='transition-all rounded-full p-2 duration-500 hover:bg-white/15'>
                    <AddIcon className='w-4 h-4 '/>
                </button>
                <button className='transition-all rounded-full p-2 duration-500 hover:bg-white/15'>
                    <ArrowIcon className='w-4 h-4'/>
                </button>
            </div>
        </div>

        <div className='mt-5'>
            <div className='flex py-1 pl-1 md:px-1.5 transition-all duration-500 rounded-md items-center gap-2 hover:bg-white/10'>
               <div className='bg-gradient-to-tl from-red-500 to-blue-500 w-11 h-11 flex items-center justify-center rounded-md text-2xl'>
                 <FaHeart/>
               </div>
               <Link to='/favorites' className='md:flex flex-col hidden'>
                 <span className='font-medium text-lg'>Liked Songs</span>
                 <div className='flex items-center gap-1'>
                    <span className='text-sm text-green-600'>
                        <BsFillPinAngleFill/>
                    </span>
                    <span className='text-white/20 text-sm font-medium'>Playlist</span>
                    <div className='w-1 h-1 bg-white/20 rounded-full'></div>
                    <span className='text-white/20 text-sm font-medium'>{favoriteTracks.length} songs</span>
                 </div>
               </Link>
            </div>
        </div>
    </div>
  )
}

export default Library