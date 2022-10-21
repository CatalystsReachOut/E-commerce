import React from 'react'
import { BsBag } from 'react-icons/bs'
import logo from './../../assets/images/logo.png'

const Navbar = () => {
  return (
    <div className='Navbar bg-[#FFFFFF] sm:p-5 p-3'>
        <div className='flex justify-between items-center'>
            <img src={logo} alt="logo" className='w-[100px]'/>
            <div className='flex gap-6'>
                <button className='text-[#494949] text-base hidden sm:block'>Our Products</button>
                <button className='text-base text-[#228B22] gap-1 flex items-center'>
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