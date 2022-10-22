import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Checkout from '../components/Checkout/Checkout';
import Navbar from '../components/Navbar/Navbar';
import About from '../pages/About/About';
import Home from '../pages/Home/Home';
import { ROUTES } from './RouterConfig';
import { useDisclosure } from '@chakra-ui/react'


const Router = () => {

  const [cart, setCart] = useState([])

  const { isOpen, onOpen, onClose } = useDisclosure()

  const RouteWithRole = ({ Element }) => {
    return (
      <>
        <Navbar cartCount={cart?.length} onOpen={onOpen} />
        <Checkout cart={cart} setCart={setCart} isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        <Element setCart={setCart} cart={cart} />
      </>
    );
  }

  return (
    <div>
      <Routes>
        <Route exact path={ROUTES.Home} element={<RouteWithRole Element={Home} />}></Route>
        <Route exact path={ROUTES.About} element={<RouteWithRole Element={About} />}></Route>
      </Routes>
    </div>
  )
}

export default Router