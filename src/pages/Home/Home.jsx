import React from 'react'
import { useNavigate } from 'react-router-dom'
import Banner from '../../components/Banner/Banner'
import { ROUTES } from '../../routes/RouterConfig'

const Home = () => {

  const navigate = useNavigate()

  const changeDir = (dir) => {
    navigate(dir)
  }

  return (
    <div className='Home'>

      <Banner />
    </div>
  )
}

export default Home