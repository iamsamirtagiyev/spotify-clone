import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context'
import Card from './Card'


const CardList = () => {

    const [playlists, setPlaylists] = useState(null)

    const getPlaylists = async() => {
        try {
                const response = await axios.get('https://api.spotify.com/v1/browse/featured-playlists', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            setPlaylists(response.data)
        } catch (error) {
            if(error.response.data.error.message === 'The access token expired'){
                localStorage.removeItem('token')
                window.location.reload()
            }
        }
    }

    useEffect(() => {
        getPlaylists()
    }, [])

    return (
    <div>
        {
            playlists && (
                <div>
                    <h1 className='text-3xl font-bold m-3'>{playlists.message}</h1>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 p-3'>
                        {
                            playlists.playlists.items.map((playlist, key) => (
                                <Card key={key} data={playlist} />
                            ))
                        }
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default CardList