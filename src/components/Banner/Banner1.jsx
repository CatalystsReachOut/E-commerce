import React from 'react'
import './Banner.scss'
import img from './../../assets/images/banner1-img.png'
import ButtonGradient from '../Button/ButtonGradient'

const Banner1 = ({className, scrollToProducts}) => {
  return (
    <div className={`${className} min-h-[250px] banner1 py-[64px] px-[48px] rounded-[8px]`}>
        <div className="container flex sm:flex-nowrap flex-wrap-reverse gap-5 justify-between items-center h-full">
            <div className=''>
                <div className='text-Primary10 text-Medium+/Title/xLarge '>Oh no! Going empty handed?</div>
                <div className='text-Medium+/Paragraph/Large mt-[8px] text-Neutral50'>Don’t compromise on your health, try a healthy cooking oil alternative today.</div>
                <ButtonGradient onClick={scrollToProducts} title={'See Products to Try'} className='mt-[30px]'/>
            </div>
                <div className='bg-Primary20 rounded-full min-h-[188px] min-w-[188px] aspect-square flex items-center justify-center'>
                    <img src={img} alt="banner1" />
                </div>
        </div>
    </div>
  )
}

export default Banner1