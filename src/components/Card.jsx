import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({data}) => {

  const navigate = useNavigate()

  return (
    <div onClick={() => navigate('/playlist', { state: {id: data.id} }) } className='flex flex-col gap-2 transition-all rounded-md p-1.5 duration-500 hover:bg-white/10'>
        <img className='aspect-square rounded-md' src={data.images[0].url} alt="cover" />
        <div className='flex flex-col'>
            <span className='capitalize whitespace-nowrap text-ellipsis overflow-hidden text-lg font-medium'>{data.name}</span>
            <span className='capitalize ellipsis font-medium text-white/30'>{data.description}</span>
        </div>
    </div>
  )
}

export default Card