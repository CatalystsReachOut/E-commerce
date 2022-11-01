import React from 'react'
import logo from './../../assets/images/LogoHorizontal.svg'
// import social from './../../assets/images/instagram.png'
import Instagram from "../../assets/images/InstagramLogo.svg"
import MapPin from "../../assets/images/MapPin.svg"
import PhoneCall from "../../assets/images/PhoneCall.svg"


const Footer = () => {
  return (
    <div className='Footer bg-[#FAFAFA] md:py-[64px] py-[32px]'>
        <div className='container m-auto '>
            <div className="flex md:flex-row flex-col justify-between md:items-center">
                <img src={logo} alt="logo" className='h-[40px] mr-auto md:m-0' />
                
                <div className='flex flex-col mt-[16px] md:m-0'>
                <div className='flex gap-3 mt-[16px]'>
                    <img src={PhoneCall} alt="Social" />
                    <a href='' target={'_blank'} className='text-Neutral60 text-Small/Label/Medium md:text-Medium+/Label/Medium'>+91 6261 867 936</a>
                </div>
                <div className='flex gap-3 mt-[16px]'>
                    <img src={Instagram} alt="Social" />
                    <a href='https://www.instagram.com/paramparaoils/' target={'_blank'} className='text-Neutral60 text-Small/Label/Medium md:text-Medium+/Label/Medium '>@paramparaoils</a>
                </div>
                <div className='flex gap-3 mt-[16px]'>
                    <img src={MapPin} alt="Social" />
                    <a href='https://www.instagram.com/paramparaoils/' target={'_blank'} className='text-Neutral60 text-Small/Label/Medium md:text-Medium+/Label/Medium'>13, Landmark Square, Danish Nagar, Bhopal</a>
                </div>
                </div>

                
            </div>
            <hr class="h-[1px] bg-[#F0F0F0] text-[#F0F0F0] my-[40px]" />
            <div className="text-Small/Label/xSmall  md:text-Medium+/Label/xSmall  text-[#939393]">
                Copyright © 2022 Parampara All Rights Reserved
            </div>
        </div>
    </div>
  )
}

export default Footer