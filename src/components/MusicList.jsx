import React, { useContext, useState } from 'react'
import { Context } from '../context';

const MusicList = ({data}) => {

    const {setTrackId, setTracks, currentTrack,  setCurrentTrack} = useContext(Context)

    setTracks(data.items)
    setCurrentTrack(data.items[0])

    const convert = ms => {
        const min = Math.floor((ms/1000/60) << 0)
        const sec = Math.floor((ms/1000) % 60)
        return min + ':' + sec
    }

  return (
    <div className='w-full bg-black/40 backdrop-blur-3xl'>
        <table className='w-full p-2'>
            <thead>
                <tr className=''>
                    <th>#</th>
                    <th>Title</th>
                    <th>Album</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.items.map((track, key) => (
                        <tr onClick={() => setTrackId(track.track.id)} key={key} className='hover:bg-white/15 transition-all duration-500 rounded-md mb-2'>
                            <td className='p-2 px-3 font-medium'>{key + 1}</td>
                            <td className='flex gap-2.5 items-center py-2'>
                                <img className='aspect-square w-11 rounded-md' src={track.track.album.images[0].url} alt="album" />
                                <div className='flex flex-col'>
                                    <p className='font-medium'>{track.track.name}</p>
                                    <div className='flex gap-1'>
                                        {
                                            track.track.artists.map((artist, key) => (
                                                <p className='text-white/30 font-medium' key={key}>{artist.name},</p>
                                            ))
                                        }
                                    </div>
                                </div>
                            </td>
                            <td className='font-medium text-white/30'>{track.track.album.name}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default MusicList