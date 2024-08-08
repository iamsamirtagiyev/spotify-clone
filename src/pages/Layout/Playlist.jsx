import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../../components/Header'
import MusicList from '../../components/MusicList'
import Loader from '../../components/Loader'

const Playlist = () => {

    const location = useLocation()
    const { id } = location.state
    const [playlist, setPlaylist] = useState(null)

    const getPlaylist = async() => {
        try {
            const response = await axios.get(`https://api.spotify.com/v1/playlists/${id}`, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })

            setPlaylist(response.data)
        } catch (error) {
            if(error.response.data.error.message === 'The access token expired'){
                localStorage.removeItem('token')
                window.location.reload()
            }
        }
    }

    useEffect(() => {
        getPlaylist()
    }, [id])

  return (
    <div className='rounded-md h-full'>
        {
            playlist ? (
                <div className=' w-full bg-center bg-fixed rounded-md bg-cover' style={{backgroundImage: `url(${playlist.images[0].url})`}}>
                    <Header data={playlist} />
                    <MusicList data={playlist.tracks} />
                </div>
            ) :<div className='text-center w-full grid place-content-center'><Loader/></div>
        }
    </div>
  )
}

export default Playlist