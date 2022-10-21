import React from 'react'

const Input = ({id, placeholder, onChange, value, title}) => {
  return (
    <div>
        <label className='text-[#726C6B] text-sm' htmlFor={id}>{title}</label>
        <input 
        type="text" 
        id={id}
        className='h-[45px] text-lg mt-1 px-2 py-1 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#228B22] focus:ring-[#228B22] block w-full rounded-md sm:text-sm focus:ring-1'
        placeholder={placeholder}
        onChange={onChange}
        value={value}
         />
    </div>
  )
}

export default Input