import React from 'react'
import logo from './../../assets/images/LogoHorizontal.svg'
import Bag from "../../assets/images/bag.svg"

const Navbar = ({onOpen, scrollToProducts,  cartCount}) => {
  return (
    <div className='Navbar sticky top-0 z-50 border-b-[1px] border-Neutral40 bg-[#FFFFFF] py-[28px]  '>
        <div className='flex container m-auto justify-between items-center  '>
            <img src={logo} alt="logo" className='h-[40px]'/>
            <div className='flex gap-6'>
                <button className='text-Medium+/Label/Medium text-[#494949]' onClick={scrollToProducts}>Browse Products</button>
                <button className='text-Medium+/Label/Medium-Strong text-Primary60 ml-[56px] flex items-center' onClick={onOpen}>
                     Your Bag 
                     <div className='ml-[10px]'>
                        <div className="absolute h-[20px] w-[20px] bg-Primary80 flex items-center justify-center rounded-full Medium+/Paragraph/xSmall-Strong text-Neutral10  text-sm translate-x-[12px] -translate-y-[7px]">{cartCount}</div>
                        <img src={Bag} alt="" />
                     </div>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar