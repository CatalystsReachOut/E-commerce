import React from 'react'
import {BsBag} from 'react-icons/bs'

const ItemCard = ({imgBg, img, quantity, name, price}) => {
  return (
    <div className='w-[100%] p-4 rounded-lg bg-[#FFFFFF] flex flex-col gap-4'>
        <div className={`aspect-square bg-[#F5ECE9] rounded-lg w-[100%] flex justify-center items-center`}>
            <img src={img} alt="Item" className='max-w-[100px] bg-transparent' />
        </div>
        <div className='description'>
            <div>
                <div className="text-[#140A08] text-lg">
                    {name}
                </div>
                <div className='text-[#726C6B] text-base'>
                    {quantity}
                </div> 
            </div>

            <div className='my-2 text-2xl'>
                {price}
            </div>

            <div>
                <button className='border-2 border-[#228B22] bg-transparent text-[#228B22] text-base p-4 w-[100%] rounded-lg flex justify-center gap-2 items-center'>
                    <BsBag/> Add to Bag
                </button>
            </div>
            
        </div>
    </div>
  )
}

export default ItemCard