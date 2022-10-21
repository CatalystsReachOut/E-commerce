import React from 'react'
import './Banner.scss'
import img from './../../assets/images/banner1-img.png'
import ButtonGradient from '../Button/ButtonGradient'

const Banner1 = ({className, scrollToProducts}) => {
  return (
    <div className={`${className} min-h-[250px] banner1 p-8 rounded-lg`}>
        <div className="container flex justify-between items-center h-full">
            <div className=''>
                <div className='text-[#FFFFFF] text-5xl'>Oh no! Going empty handed?</div>
                <div className='text-base mt-2 text-[#D0CECE] mb-6'>Don’t compromise on your health, try a healthy cooking oil alternative today.</div>
                <ButtonGradient onClick={scrollToProducts} title={'See Products to Try'}/>
            </div>
                <div className='bg-[#FFFFFF] rounded-full p-5 aspect-square flex items-center justify-center'>
                    <img src={img} alt="banner1" />
                </div>
        </div>
    </div>
  )
}

export default Banner1