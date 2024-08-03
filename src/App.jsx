import React from 'react'
import { useRoutes } from 'react-router-dom'
import router from './routes'
import { Provider } from './context'

const App = () => {
  return (
    <Provider>
      { useRoutes(router) }
    </Provider>
  )
}

export default App