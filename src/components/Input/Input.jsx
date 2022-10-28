import React from 'react'

const Input = ({id, placeholder, onChange, value, title}) => {
  return (
    <div>
        <label className='text-Neutral60 text-Medium+/Label/Small  text-sm' htmlFor={id}>{title}</label>
        <input 
        type="text" 
        id={id}
        className='h-[45px] text-lg mt-1 px-2 py-1 bg-white border  border-Neutral40 placeholder-Neutral40 focus:outline-none focus:border-[#228B22] focus:ring-[#228B22] block w-full rounded-[4px] sm:text-sm focus:ring-1'
        placeholder={placeholder}
        onChange={onChange}
        value={value}
         />
    </div>
  )
}

export default Input