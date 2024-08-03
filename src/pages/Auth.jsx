import React, { useContext } from 'react'
import { Context } from '../context'

const Auth = () => {
  const { clientId, redirectURL, apiURL, scope } = useContext(Context)
  const auth = () => {
    window.location = `${apiURL}?client_id=${clientId}&redirect_uri=${redirectURL}&scope=${scope.join(' ')}&response_type=token&show_daialog=true`
  }

  return (
    <div className='flex items-center justify-center w-full bg-green-600 min-h-screen'>
      <div className='px-5 sm:px-10 w-full max-w-xl'>
        <img className='w-full flex' src="/logo.png" alt="logo" />
        <button onClick={auth} className='bg-black w-full mt-5 rounded-full h-14 text-xl text-green-600 font-bold transition-all duration-500 active:scale-95 relative after:absolute after:w-full after:h-full after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:left-1/2 after:rounded-full after:transition-all after:duration-500 hover:after:w-[102%] hover:after:h-[115%] after:border-2 after:border-black'>Connect Spotify</button>
      </div>
    </div>
  )
}

export default Auth