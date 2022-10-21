import React from 'react'

const Counter = () => {
  return (
    <div className='flex gap-4'>
        <div className='w-[40px] h-[40px] border border-[#726C6B] text-[#228B22] bg-[#FFFFFF] rounded flex items-center justify-center cursor-pointer'>-</div>
        <div className='w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#0E390E] text-[#FFFFFF]'>2</div>
        <div className='w-[40px] h-[40px] border border-[#228B22] text-[#228B22] bg-[#FFFFFF] rounded flex items-center justify-center cursor-pointer'>+</div>
    </div>
  )
}

export default Counter