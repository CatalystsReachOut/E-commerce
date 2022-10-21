import React from 'react'

const ButtonOutline = ({ className, color, textColor, title, onClick, icon }) => {
  return (
    <button onClick={onClick} className={`border-2 border-[${color}] bg-transparent text-[${textColor}] text-base p-4 w-[100%] rounded-lg flex justify-center gap-2 items-center ${className}`}>
      {icon} {title}
    </button>
  )
}

export default ButtonOutline