import React from 'react'
import logo from './../../assets/images/logo.png'
import social from './../../assets/images/Social.png'

const Footer = () => {
  return (
    <div className='Footer bg-[#FAFAFA] p-5 sm:p-10'>
        <div className=''>
            <div className="flex justify-between items-center">
                <img src={logo} alt="logo" />
                <div className='flex'>
                    <img src={social} alt="Social" />
                </div>
            </div>
            <div className="mt-10 text-base text-[#939393]">
                Copyright © 2022 Parampara All Rights Reserved
            </div>
        </div>
    </div>
  )
}

export default Footer