import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context'

const SearchResult = ({result}) => {

    const { options, tracks, setTracks, setCurrentTrack } = useContext(Context)
    const [search, setSearch] = useState([])

    const getSearch = async() => {
        try{
            const response = await axios.get(`https://api.spotify.com/v1/search?q=${result}&type=track&limit=20&include_external=audio`, options)
            setSearch(response.data.tracks.items);
            setTracks(response.data.tracks.items)
        }
        catch(error){
            if(error.response.data.error.message === 'The access token expired'){
                localStorage.removeItem('token')
                window.location.reload()
            }
        }
    }

    useEffect(() => {
        if(result){
            getSearch()
            
        }
        else{
            setSearch([])
        }
    }, [result])


  return (
    <div className='bg-zinc-900 h-full rounded-md overflow-auto'>
        <>
        {
            search.length !== 0 && (
                <div className='py-2 capitalize px-3 flex flex-col'>
            <span className='text-green-600 font-bold text-xl'>Results for</span>
            <span className='font-bold text-3xl'>{result}</span>
        </div>
            )
        }
        </>
        <div className='flex flex-col gap-0.5'>
            {
                search.map((track, key) => (
                    <div key={key} onClick={() => setCurrentTrack(track)} className='flex items-center gap-2 transition-all duration-500 hover:bg-white/10 p-1.5 rounded-md'>
                        <img className='aspect-square w-14 rounded-md' src={track.album.images[0].url} alt="cover" />
                        <div className='flex flex-col'>
                            <span className='font-medium'>{track.name}</span>
                            <span className='flex items-center gap-1 font-medium text-white/30' >
                                {
                                    track.artists.map((artist, k) => (
                                        <p>{artist.name}</p>
                                    ))
                                }
                            </span>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default SearchResult