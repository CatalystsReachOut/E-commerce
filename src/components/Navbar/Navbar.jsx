import React from 'react'
import { BsBag } from 'react-icons/bs'
import logo from './../../assets/images/logo.png'

const Navbar = ({onOpen, scrollToProducts}) => {
  return (
    <div className='Navbar bg-[#FFFFFF] p-5 sm:px-12'>
        <div className='flex justify-between items-center px-6'>
            <img src={logo} alt="logo" className='w-[100px]'/>
            <div className='flex gap-6'>
                <button className='text-[#494949] text-base hidden sm:block' onClick={scrollToProducts}>Our Products</button>
                <button className='text-base text-[#228B22] gap-1 flex items-center' onClick={onOpen}>
                     Your Bag 
                     <div>
                        <div className="absolute h-[18px] w-[18px] bg-[#000000] flex items-center justify-center rounded-full text-[#FFFFFF] p-1 text-sm translate-x-[10px] -translate-y-[10px]">1</div>
                        <BsBag/>
                     </div>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar