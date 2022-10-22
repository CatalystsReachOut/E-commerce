import React from 'react'
import './Banner.scss'
import img from './../../assets/images/star.png'
import ButtonGradient from '../Button/ButtonGradient'
import ButtonOutline from '../Button/ButtonOutline'

const Banner2 = ({className, scrollToProducts, onOpen}) => {
  return (
    <div className={`${className} min-h-[250px] banner2 p-8 rounded-lg`}>
        <div className="container flex sm:flex-nowrap gap-5 flex-wrap-reverse justify-between items-center h-full">
            <div className=''>
                <div className='text-[#FFFFFF] text-5xl'>Proceed with 1 item in your bag</div>
                <div className='text-base mt-2 text-[#D0CECE] mb-6'>Cold Pressed Coconut Oil 250mL  x 1 </div>
                <div className='flex sm:flex-nowrap flex-wrap gap-5 sm:max-h-[40px]'>
                    <ButtonGradient onClick={onOpen} title={'View Bag & Continue'} className={'max-h-[50px] sm:min-w-[250px]'}/>
                    <ButtonOutline onClick={scrollToProducts} title={'Keep Shopping'} color={'#FFFFFF'} className={'max-h-[50px] sm:max-w-[200px] text-[#FFFFFF]'}/>
                </div>
            </div>
                <div className='bg-[#FFFFFF] rounded-full p-5 aspect-square flex items-center justify-center'>
                    <img src={img} alt="banner1" className='w-full'/>
                </div>
        </div>
    </div>
  )
}

export default Banner2