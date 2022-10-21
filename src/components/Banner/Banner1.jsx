import React from 'react'
import './Banner.scss'
import img from './../../assets/images/banner1-img.png'
import ButtonGradient from '../Button/ButtonGradient'

const Banner1 = ({className}) => {
  return (
    <div className={`${className} h-[250px] banner1 p-8 rounded-lg`}>
        <div className="flex justify-between items-center h-full">
            <div className=''>
                <div className='text-[#FFFFFF] text-5xl'>Oh no! Going empty handed?</div>
                <div className='text-lg text-[#D0CECE] mb-6'>Don’t compromise on your health, try a healthy cooking oil alternative today.</div>
                <ButtonGradient title={'See Products to Try'}/>
            </div>
                <div className='bg-[#FFFFFF] rounded-full p-5 aspect-square flex items-center justify-center'>
                    <img src={img} alt="banner1" />
                </div>
        </div>
    </div>
  )
}

export default Banner1