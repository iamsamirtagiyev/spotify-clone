import React, { useState } from 'react'
import { AddIconCircle, FullScreenIcon, MixIcon, NextPrevIcon, PauseIcon, RepeatIcon, VolumeIcon } from '../icons'
import classNames from 'classnames'
import { IoIosArrowDown } from "react-icons/io";

const Bottombar = () => {

  const [timeLine, setTimeLine] = useState(0)
  const [volume, setVolume] = useState(0)
  const [active, setActive] = useState(false)

  const clickHandle = e => {
    if(e.target.classList.contains('add')){
      console.log('add');
    }
    else if(e.target.classList.contains('play')){
      console.log('play');
    }
    else{
      setActive(true)
    }
  }

  return (
    <div className={classNames('bg-zinc-900 sm:bg-black md:gap-5  overflow-auto  flex items-center h-20 sm:!h-24 gap-2 sm:static fixed w-full left-1/2 -translate-x-1/2 sm:translate-x-0 bottom-[68px]  transition-all duration-500', {'!h-full !bottom-0 sm:h-24': active})}>
      <div onClick={clickHandle} className={classNames('flex gap-2 sm:rounded-md w-full px-2 sm:px-4 items-center', {'hidden sm:flex': active})}>
        <div className='flex gap-5 items-center w-full'>
          <div className='flex gap-3 items-center pointer-events-none'>
            <img className='w-14 aspect-square object-cover rounded-md' src="https://i.ytimg.com/vi/CRzuQ9xKYf8/hq720_live.jpg?sqp=COSErLUG-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDOeE-B9XOUQSEkDf4gDdEwKS8P5A" alt="cover" />
            <div className='flex flex-col'>
              <span className='font-medium'>Medcezir</span>
              <span className='font-medium text-white/30'>Ceza</span>
            </div>
          </div>
            <button className='add'>
              <AddIconCircle className='w-5 h-5 pointer-events-none' />
            </button>
        </div>

        <div className='w-full flex flex-col gap-3'>
          <div className='flex items-center gap-5 justify-center'>
            <button className='transitiona-all mix hidden sm:block duration-500 opacity-75 hover:opacity-100'>
              <MixIcon className='w-4 h-4 pointer-events-none' />
            </button>
            <div className='flex items-center w-full sm:w-auto sm:justify-start justify-end gap-5'>
              <button className='transitiona-all hidden prev sm:block duration-500 opacity-75 hover:opacity-100'>
                <NextPrevIcon className='w-5 h-5 pointer-events-none' />
              </button>
              <button className='transitiona-all duration-500 play hover:scale-105 sm:bg-white rounded-full p-2'>
                <PauseIcon className='w-5 h-5 sm:text-black pointer-events-none' />
              </button>
              <button className='transitiona-all hidden next sm:block rotate-180 duration-500 opacity-75 hover:opacity-100'>
                <NextPrevIcon className='w-5 h-5 pointer-events-none' />
              </button>
            </div>
            <button className='transitiona-all hidden repeat sm:block duration-500 opacity-75 hover:opacity-100'>
              <RepeatIcon className='w-4 h-4 pointer-events-none' />
            </button>
          </div>

          <div className='sm:flex hidden items-center gap-5 w-full'>
            <span className='font-medium text-white/30'>00:00</span>
            <div className='relative group flex items-center w-full'>
              <div className='absolute top-1/2 -translate-y-1/2 left-0 h-full rounded-full transition-colors duration-500 group-hover:bg-green-600 bg-white' style={{width: `${timeLine}%`}}></div>
              <input type="range" className="range" defaultValue={0} onInput={e => setTimeLine(e.target.value)} />
            </div>
            <span className='font-medium text-white/30'>00:00</span>
          </div>
        </div>

        <div className='sm:flex hidden items-center gap-3 w-full justify-end'>
          <div className='flex items-center gap-3'>
            <VolumeIcon className='w-5 h-5'/>
            <div className='relative group flex items-center w-full'>
              <div className='absolute top-1/2 -translate-y-1/2 left-0 h-full rounded-full transition-colors duration-500 group-hover:bg-green-600 bg-white' style={{width: `${volume}%`}}></div>
              <input type="range" className="range" defaultValue={0} onInput={e => setVolume(e.target.value)} />
            </div>
          </div>
          <button className="transition-all duration-500 hover:opacity-100 opacity-75">
            <FullScreenIcon className='w-5 h-5'/>
          </button>
        </div>
      </div>

      <div className={classNames('flex relative h-full items-start flex-col gap-5 sm:hidden', {'hidden sm:hidden': !active})}>
        <div className='w-full flex items-center pt-4'>
          <button onClick={() => setActive(false)} className='text-3xl'>
            <IoIosArrowDown/>
          </button>
        </div>

        <div className='flex flex-col gap-5 px-10 py-5'>
          <img className='w-full aspect-square object-cover rounded-md' src="https://i.ytimg.com/vi/CRzuQ9xKYf8/hq720_live.jpg?sqp=COSErLUG-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDOeE-B9XOUQSEkDf4gDdEwKS8P5A" alt="cover" />
          <div className='flex items-center justify-between'>
            <div className='flex flex-col'>
              <span className="font-medium text-xl">Medcezir</span>
              <span className="font-medium text-lg text-white/30">Ceza</span>
            </div>
            <button>
              <AddIconCircle className='w-5 h-5' />
            </button>
          </div>
        </div>

        <div className='px-10 w-full'>
          <div className='flex items-center gap-5 w-full'>
              <span className='font-medium text-white/30'>00:00</span>
              <div className='relative group flex items-center w-full'>
                <div className='absolute top-1/2 -translate-y-1/2 left-0 h-full rounded-full transition-colors duration-500 group-hover:bg-green-600 bg-white' style={{width: `${timeLine}%`}}></div>
                <input type="range" className="range" defaultValue={0} onInput={e => setTimeLine(e.target.value)} />
              </div>
              <span className='font-medium text-white/30'>00:00</span>
            </div>
        </div>

          <div className='flex items-center gap-5 justify-between w-full px-10 py-5'>
            <button className='transitiona-all duration-500 opacity-75 hover:opacity-100'>
              <MixIcon className='w-4 h-4 pointer-events-none' />
            </button>
            <div className='flex items-center gap-8'>
              <button className='transitiona-all  duration-500 opacity-75 hover:opacity-100'>
                <NextPrevIcon className='w-5 h-5 pointer-events-none' />
              </button>
              <button className='transitiona-all duration-500 play hover:scale-105 bg-white rounded-full p-2'>
                <PauseIcon className='w-5 h-5 text-black pointer-events-none' />
              </button>
              <button className='transitiona-all  rotate-180 duration-500 opacity-75 hover:opacity-100'>
                <NextPrevIcon className='w-5 h-5 pointer-events-none' />
              </button>
            </div>
            <button className='transitiona-all  duration-500 opacity-75 hover:opacity-100'>
              <RepeatIcon className='w-4 h-4 pointer-events-none' />
            </button>
          </div>
      </div>
    </div>
  )
}

export default Bottombar