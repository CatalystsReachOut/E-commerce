import React from 'react'
import Counter from '../Counter/Counter'
import img from './../../assets/images/item.png'

const CheckoutItems = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 grid-cols-1 mb-3">
        <div className="col-span-1 flex gap-5">
            <div className=' w-[100px] h-[100px] rounded-sm aspect-square flex p-8 items-center justify-center bg-[#F7F5EB]'>
                <img src={img} alt="item" className='w-[50%]'/>
            </div>
            <div>

            <div className='text-lg font-bold'>
                Cold Pressed Groundnut Oil
            </div>
            <div className='text-base'>
                250mL
            </div>
            <div className='text-xl font-extrabold'>
                ₹75.00
            </div>
            </div>
        </div>
        <div className="col-span-1 flex justify-between">
            <Counter/>
            <div className='font-bold text-2xl'>
                ₹75.00
            </div>
        </div>
    </div>
  )
}

export default CheckoutItems