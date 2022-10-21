import React from 'react'
import logo from './../../assets/images/logo.png'
import social from './../../assets/images/instagram.png'

const Footer = () => {
  return (
    <div className='Footer bg-[#FAFAFA] p-12 sm:p-10'>
        <div className='container m-auto p-6'>
            <div className="flex justify-between items-center">
                <img src={logo} alt="logo" />
                <div className='flex gap-3'>
                    <img src={social} alt="Social" />
                    <a href='https://www.instagram.com/paramparaoils/' target={'_blank'} className='text-[#494949] text-base'>@paramparaoils</a>
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