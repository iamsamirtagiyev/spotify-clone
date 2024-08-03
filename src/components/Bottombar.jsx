import React, { useState } from 'react'
import { AddIconCircle, FullScreenIcon, MixIcon, NextPrevIcon, PauseIcon, RepeatIcon, VolumeIcon } from '../icons'
import classNames from 'classnames'
import { IoIosArrowDown } from "react-icons/io";

const Bottombar = () => {

  const [timeLine, setTimeLine] = useState(0)
  const [volume, setVolume] = useState(0)
  const [active, setActive] = useState(false)

  const clickHandle = e => {
    if(e.target.className.includes('add')){
      //
    }
    else if(e.target.className.includes('pause')){
      //
    }
    else{
      setActive(true)
    }
  }

  return (
    <div onClick={clickHandle} className={classNames('bg-zinc-900 sm:bg-black sm:rounded-md overflow-auto px-2 sm:px-5 flex items-center h-16 sm:!h-24 gap-2 sm:static fixed w-full left-0 bottom-[68px]  transition-all duration-500', {'!h-full sm:h-24 bottom-0 flex-col sm:flex-row !p-0 !pb-5 sm:!pb-0 sm:!px-3': active})}>
      <div className={classNames('sm:hidden flex w-full items-center p-2', {'hidden': !active})}>
        <button onClick={() => setActive(false)} className={classNames('text-2xl close', {'hidden': !active})}>
          <IoIosArrowDown className='pointer-enevts-none'/>
        </button>
      </div>
      <div className={classNames('w-full flex  items-center gap-2', {'flex-col sm:flex-row px-10 sm:px-0': active})}>
        <img className={classNames('w-12 rounded-md aspect-square object-cover', {'w-full sm:w-12': active})} src="https://i.ytimg.com/vi/CRzuQ9xKYf8/hq720_live.jpg?sqp=COSErLUG-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDOeE-B9XOUQSEkDf4gDdEwKS8P5A" alt="cover" />
        <div className={classNames('flex items-center w-full sm:w-auto', {'justify-between sm:justify-start': active})}>
          <div className='flex flex-col'>
            <span className='font-medium'>Medcezir</span>
            <span className='text-white/30 font-medium'>Ceza</span>
          </div>
          <button className='ml-3 add'>
            <AddIconCircle className='text-white pointer-events-none w-5 h-5'/>
          </button>
        </div>
      </div>
      <div className={classNames('w-full flex flex-col gap-2 items-end sm:items-center', {'px-10 gap-5': active})}>
        <div className={classNames('flex items-center gap-5 justify-between sm:!justify-center w-full order-2', {'!justify-end': !active})}>
          <button className={classNames('mix', {'hidden sm:block': !active})}>
            <MixIcon className='w-4 h-4 pointer-events-none opacity-80 transition-all duration-500 hover:opacity-100'/>
          </button>
          <div className={classNames('flex items-center gap-5')}>
            <button className={classNames('prev',{'hidden sm:block': !active})}>
              <NextPrevIcon className='w-5 pointer-events-none h-5 opacity-80 transition-all duration-500 hover:opacity-100' />
            </button>
            <button className={classNames('w-7 h-7 pause rounded-full sm:bg-white flex items-center justify-center transition-all duration-500 hover:scale-105', {'bg-white text-black': active})}>
              <PauseIcon className='w-4 h-4 pointer-events-none sm:text-black' />
            </button>
            <button className={classNames('next', {'hidden sm:block': !active})}>
              <NextPrevIcon className='w-5 h-5 pointer-events-none rotate-180 opacity-80 transition-all duration-500 hover:opacity-100' />
            </button>
          </div>
          <button className={classNames('repeat', {'hidden sm:block': !active})}>
            <RepeatIcon className='w-4 h-4 pointer-events-none opacity-80 transition-all duration-500 hover:opacity-100'/>
          </button>
        </div>
        <div className={classNames('flex items-center gap-3 w-full sm:order-2', {'hidden sm:flex': !active})}>
          <span className='text-white/30 font-medium'>00:00</span>
          <div className='relative flex items-center w-full group cursor-pointer'>
            <div className='absolute top-1/2 left-0 -translate-y-1/2 h-full bg-white rounded-full transition-colors duration-500 group-hover:bg-green-600' style={{width: `${timeLine}%`}}></div>
            <input type="range" className="range" defaultValue={0} onInput={e => setTimeLine(e.target.value)} />
          </div>
          <span className='text-white/30 font-medium'>00:00</span>
        </div>
      </div>
      <div className='w-full hidden sm:flex gap-3 items-center justify-end'>
        <div>
          <span className='flex items-center gap-2'>
            <VolumeIcon className='w-5 h-5' />
            <div className='relative flex items-center w-full group cursor-pointer'>
              <div className='absolute top-1/2 left-0 -translate-y-1/2 h-full bg-white rounded-full transition-colors duration-500 group-hover:bg-green-600' style={{width: `${volume}%`}}></div>
              <input type="range" className="range" defaultValue={0} onInput={e => setVolume(e.target.value)} />
            </div>
          </span>
        </div>
        <button>
          <FullScreenIcon className='w-4 h-4 transition-all duration-500 opacity-80 hover:opacity-100' />
        </button>
      </div>
    </div>
  )
}

export default Bottombar