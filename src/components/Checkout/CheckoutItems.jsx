import { createAction } from '@reduxjs/toolkit'
import React from 'react'
import Counter from '../Counter/Counter'
import img from './../../assets/images/BeerBottle.png'
import Minus from "../../assets/images/MinusColored.svg"
import Plus from "../../assets/images/PlusColored.svg"

const CheckoutItems = ({ item, addQuantity, removeQuantity }) => {


    return (
        <div className="grid gap-4 sm:grid-cols-2 grid-cols-1 mb-[40px]">
            <div className="col-span-1 flex gap-5">
                <div className=' w-[108px] h-[108px] rounded-[4px] aspect-square items-center justify-center bg-[#F7F5EB]'>
                    <img src={item?.image} alt="item" className='w-[100%]' />
                </div>
                <div>

                    <div className='text-Medium+/Label/Large-Strong text-Neutral80'>
                        {item?.name}
                    </div>
                    <div className='text-Medium+/Paragraph/Medium mt-[4px] text-Neutral60'>
                        {item?.quantity}
                    </div>
                    <div className='mt-[16px] flex flex-row items-center  gap-[4px] text-Neutral80'>
                      <span className='text-Medium+/Label/Medium'>₹ </span>  <span className='text-Medium+/Title/Small'>{item?.price}</span>
                    </div>
                </div>
            </div>
            <div className="col-span-1 flex justify-between">
                {/* <Counter id={item?.id} addQuantity={addQuantity} removeQuantity={removeQuantity} count={item?.count} /> */}
                <div className='flex items-center gap-[40px]'>
                    <div
                        onClick={() => removeQuantity(item?.id)}
                        className='w-[40px] h-[40px] border border-Neutral50 hover:bg-Primary10 text-[#228B22] bg-[#FFFFFF] rounded-[4px] flex items-center justify-center cursor-pointer'>
                            <img src={Minus} />
                        </div>
                    <div className='w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#0E390E] text-[#FFFFFF]'>{item?.count}</div>
                    <div
                        onClick={() => addQuantity(item?.id)}
                        className='w-[40px] h-[40px] border border-[#228B22] hover:bg-Primary10 text-[#228B22] bg-[#FFFFFF] rounded flex items-center justify-center cursor-pointer'>
                            <img src={Plus} />

                        </div>
                </div>
                <div className='flex flex-row items-center gap-[4px] '>
                   <span className='text-Medium+/Label/Medium'>₹</span> <span className='text-Medium+/Title/Small'>{item?.price}</span> 
                </div>
            </div>
        </div>
    )
}

export default CheckoutItems