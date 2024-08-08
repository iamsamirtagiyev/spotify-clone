import React, { useContext, useEffect, useRef, useState } from 'react'
import { AddIconCircle, FullScreenIcon, MixIcon, NextPrevIcon, PauseIcon, PlayIcon, RepeatIcon, VolumeIcon } from '../icons'
import classNames from 'classnames'
import { FaCheck } from "react-icons/fa6";
import { Context } from '../context';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../stores/favorite';

const Bottombar = () => {

  const [timeLine, setTimeLine] = useState(0)
  const [volume, setVolume] = useState(100)
  const [mix, setMix] = useState(false)
  const {trackId, setTrackId, play, setPlay, tracks, currentTrack, setCurrentTrack} = useContext(Context)
  const audioRef = useRef()
  const dispatch = useDispatch()
  const { favoriteTracks } = useSelector(state => state.favorite)

useEffect(() => {
  console.log(favoriteTracks);
}, [favoriteTracks])

  useEffect(() => {
    if(currentTrack){
      setPlay(false)
      setCurrentTrack(tracks[trackId])
      setTimeout(() => {
        setPlay(true)
      }, 1000)
    }
  }, [trackId])

  useEffect(() => {
    if(currentTrack){
      audioRef.current.volume = volume/100
    }
  }, [volume])



useEffect(() => {
  if(currentTrack){
    setInterval(() => {
      setTimeLine(Math.floor(audioRef.current?.currentTime) + 1);
    }, 1000)

    
  }
}, [])
  

useEffect(() => {
  if(currentTrack){
    if(timeLine === Math.floor(audioRef.current?.duration) + 1){
      nextHandle()
    }
  }
}, [timeLine])


 useEffect(() => {
  if(currentTrack) {
    play ? audioRef.current.play() : audioRef.current.pause()
  }
 }, [play])

 const nextHandle = () => {
  if(mix){
    setTrackId(Math.floor(Math.random() * (tracks.length - 1)))
  }
  else{
    if(trackId < tracks.length){
      setTrackId(trackId => trackId + 1)
    }
  }
 }

 const prevHandle = () => {
  if(mix){
    setTrackId(Math.floor(Math.random() * (tracks.length - 1)))
  }
  else{
    if(trackId >= 0){
      setTrackId(trackId => trackId - 1)
    }
  }
 }

const favorite = track => {
  if(favoriteTracks.find(tracks => tracks.track.id == track.track.id)){
    dispatch(removeFavorite(track))
  }
  else{
    dispatch(addFavorite(track))
  }
}

  const changeHandle = e => {
    audioRef.current.currentTime = e.target.value
    setTimeLine(e.target.value)
  }

  return (
    <>
    {
      currentTrack ? (
    <div className={classNames('bg-zinc-900 sm:bg-black md:gap-5  overflow-auto  flex items-center h-20 sm:!h-24 sm:static fixed w-full left-1/2 -translate-x-1/2 sm:translate-x-0 bottom-[68px]  transition-all duration-500')} style={{backgroundImage: `linear-gradient(url(${currentTrack?.track?.album.images[0].url || ''})`}}>
      <div className={classNames('flex gap-2 sm:rounded-md w-full h-full px-2 sm:px-4 items-center bg-black/40 sm:bg-black backdrop-blur-3xl')} >
        <div className='flex gap-5 items-center w-full'>
          <div className='flex gap-3 items-center pointer-events-none'>
            <img className='w-14 aspect-square object-cover rounded-md' src={ currentTrack?.track?.album.images[0].url || ''} alt="cover" />
            <div className='flex flex-col'>
              <span className='font-medium'>{ currentTrack?.track?.name || ''}</span>
              <div className='flex gap-1.5 whitespace-nowrap overflow-hidden text-ellipsis'>
                {
                  currentTrack?.track?.artists.map((artist, key) => (
                    <span key={key} className='font-medium text-white/30'>{artist.name}, </span>
                  ))
                }
              </div>
            </div>
          </div>
            <button className='add' onClick={() => favorite(currentTrack)}>
              {
              
              (favoriteTracks.find(track => track.track.id == currentTrack.track.id)) ? (<div className='bg-green-600 rounded-full p-1'>
                <FaCheck/>
              </div>) : <AddIconCircle className='w-5 h-5 pointer-events-none' />
              }
            </button>
        <audio ref={audioRef} hidden src={ currentTrack?.track.preview_url || ''} controls></audio>
        </div>
        <div className='w-full flex flex-col gap-3'>
          <div className='flex items-center gap-5 justify-center'>
            <button onClick={() => setMix(mix => !mix)} className={classNames('transitiona-all mix hidden sm:block duration-500 opacity-75 hover:opacity-100', { 'text-green-600': mix })}>
              <MixIcon className='w-4 h-4 pointer-events-none' />
            </button>
            <div className='flex items-center w-full sm:w-auto sm:justify-start justify-end gap-5'>
              <button onClick={prevHandle} className='transitiona-all duration-500 opacity-75 hover:opacity-100'>
                <NextPrevIcon className='w-5 h-5 pointer-events-none' />
              </button>
              <button onClick={() => setPlay(play => !play)} className='transitiona-all duration-500 play hover:scale-105 sm:bg-white rounded-full p-2'>
                {
                  play ? <PlayIcon className='w-5 h-5 sm:text-black pointer-events-none' /> : <PauseIcon className='w-5 h-5 sm:text-black pointer-events-none' />
                }
              </button>
              <button onClick={nextHandle} className='transitiona-all rotate-180 duration-500 opacity-75 hover:opacity-100'>
                <NextPrevIcon className='w-5 h-5 pointer-events-none' />
              </button>
            </div>
            <button className='transitiona-all hidden repeat sm:block duration-500 opacity-75 hover:opacity-100'>
              <RepeatIcon className='w-4 h-4 pointer-events-none' />
            </button>
          </div>

          <div className='sm:flex hidden items-center gap-5 w-full'>
            <span className='font-medium text-white/30'>00:{timeLine}</span>
            <div className='relative group flex items-center w-full'>
              <div className='absolute top-1/2 -translate-y-1/2 left-0 h-full rounded-full transition-colors duration-500 group-hover:bg-green-600 bg-white' style={{width: `${timeLine * 100 / 30}%`}}></div>
              <input type="range" className="range" defaultValue={0} value={timeLine} min={0} max={Math.floor(audioRef.current?.duration)} onInput={changeHandle} />
            </div>
            <span className='font-medium text-white/30'>00:{Math.floor(audioRef.current?.duration) + 1}</span>
          </div>
        </div>

        <div className='sm:flex hidden items-center gap-3 w-full justify-end'>
          <div className='flex items-center gap-3'>
            <VolumeIcon className='w-5 h-5'/>
            <div className='relative group flex items-center w-full'>
              <div className='absolute top-1/2 -translate-y-1/2 left-0 h-full rounded-full transition-colors duration-500 group-hover:bg-green-600 bg-white' style={{width: `${volume}%`}}></div>
              <input type="range" className="range" defaultValue={volume} onInput={e => setVolume(e.target.value)} />
            </div>
          </div>
          <button className="transition-all duration-500 hover:opacity-100 opacity-75">
            <FullScreenIcon className='w-5 h-5'/>
          </button>
        </div>
      </div>
    </div>) : (
      <div className='flex items-center justify-center py-5'>Muzik Yok</div>
    )
    }
    </>
  )
}

export default Bottombar