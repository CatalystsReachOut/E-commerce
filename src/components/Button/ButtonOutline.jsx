import React from 'react'

const ButtonOutline = ({className, title, onClick, icon}) => {
  return (
    <button onClick={onClick} className={`border-[1px] border-Primary80 Medium+/Label/Large-Strong py-[16px] px-[24px]  w-[fit-content] rounded-[8px] rounded-lg flex justify-center gap-2 items-center ${className}`}>
     {icon} {title}
    </button>
  )
}

export default ButtonOutline