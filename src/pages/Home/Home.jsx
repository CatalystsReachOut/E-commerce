import React from 'react'
import { useNavigate } from 'react-router-dom'
import Banner from '../../components/Banner/Banner'
import { ROUTES } from '../../routes/RouterConfig'
import ItemCard from '../../components/ItemCard/ItemCard'

const Home = () => {

  const navigate = useNavigate()

  const changeDir = (dir) => {
    navigate(dir)
  }

  return (
    <div className='Home'>

      <Banner />
      <ItemCard/>
    </div>
  )
}

export default Home