import React from 'react'
import {BsBag} from 'react-icons/bs'
import ButtonOutline from '../Button/ButtonOutline'

const ItemCard = ({imgBg, img, quantity, name, price}) => {
  return (
    <div className='w-[100%] p-4 rounded-lg bg-[#FFFFFF] flex flex-col gap-4'>
        <div className={`aspect-square bg-[${imgBg}] rounded-lg w-[100%] flex justify-center items-center`}>
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
                <ButtonOutline title={"Add to Bag"} color={'#228B22'} textColor={'#228B22'} icon={<BsBag/>}/>
            </div>
            
        </div>
    </div>
  )
}

export default ItemCard