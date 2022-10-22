import { createAction } from '@reduxjs/toolkit'
import React from 'react'
import Counter from '../Counter/Counter'
import img from './../../assets/images/item.png'

const CheckoutItems = ({ item, addQuantity, removeQuantity }) => {


    return (
        <div className="grid gap-4 sm:grid-cols-2 grid-cols-1 mb-3">
            <div className="col-span-1 flex gap-5">
                <div className=' w-[100px] h-[100px] rounded-sm aspect-square flex p-8 items-center justify-center bg-[#F7F5EB]'>
                    <img src={item?.image} alt="item" className='w-[50%]' />
                </div>
                <div>

                    <div className='text-lg font-bold'>
                        {item?.name}
                    </div>
                    <div className='text-base'>
                        {item?.quantity}
                    </div>
                    <div className='text-xl font-extrabold'>
                        ₹{item?.price}
                    </div>
                </div>
            </div>
            <div className="col-span-1 flex justify-between">
                {/* <Counter id={item?.id} addQuantity={addQuantity} removeQuantity={removeQuantity} count={item?.count} /> */}
                <div className='flex gap-4'>
                    <div
                        onClick={() => removeQuantity(item?.id)}
                        className='w-[40px] h-[40px] border border-[#726C6B] text-[#228B22] bg-[#FFFFFF] rounded flex items-center justify-center cursor-pointer'>-</div>
                    <div className='w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#0E390E] text-[#FFFFFF]'>{item?.count}</div>
                    <div
                        onClick={() => addQuantity(item?.id)}
                        className='w-[40px] h-[40px] border border-[#228B22] text-[#228B22] bg-[#FFFFFF] rounded flex items-center justify-center cursor-pointer'>+</div>
                </div>
                <div className='font-bold text-2xl'>
                    ₹ {item?.price}
                </div>
            </div>
        </div>
    )
}

export default CheckoutItems