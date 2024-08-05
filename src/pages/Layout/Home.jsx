import axios from 'axios'
import React, { useContext } from 'react'
import { Context } from '../../context'
import CardList from '../../components/CardList'

const Home = () => {

  return (
    <div>
      <CardList/>
    </div>
  )
}

export default Home