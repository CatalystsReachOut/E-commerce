import React from 'react'
import logo from './../../assets/images/LogoHorizontal.svg'
import Bag from "../../assets/images/bag.svg"

const Navbar = ({onOpen, scrollToProducts,  cartCount}) => {
  return (
    <div className='Navbar sticky top-0 z-50 border-b-[1px] border-Neutral40 bg-[#FFFFFF] md:py-[28px] py-[16px]   '>
        <div className='flex container m-auto justify-between items-center  '>
            <img src={logo} alt="logo" className='md:h-[40px] h-[24px]'/>
            <div className='flex '>
                <button className='hidden md:block text-Medium+/Label/Medium text-[#494949]' onClick={scrollToProducts}>Browse Products</button>
                <button className='md:text-Medium+/Label/Medium-Strong text-Small/Label/Medium-Strong text-Primary60 md:ml-[48px] flex items-center' onClick={onOpen}>
                     Your Bag 
                     <div className='ml-[10px]'>
                        <div className="absolute h-[20px] w-[20px] bg-Primary80 flex items-center justify-center rounded-full text-Medium+/Paragraph/xSmall-Strong text-Neutral10  text-sm translate-x-[12px] -translate-y-[7px]">{cartCount}</div>
                        <img src={Bag} alt="" className='md:w-[24px] w-[20px]' />
                     </div>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar