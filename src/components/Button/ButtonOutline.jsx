import React from 'react'

const ButtonOutline = ({className, title, onClick, icon}) => {
  return (
    <button onClick={onClick} className={`${className} border-[1px] border-Primary80  text-Medium+/Label/Medium-Strong md:text-Medium+/Label/Large-Strong md:py-[16px] md:px-[24px] py-[14px] px-[16px]  w-[fit-content] rounded-[8px] rounded-lg flex justify-center gap-2 items-center `}>
     {icon} {title}
    </button>
  )
}

export default ButtonOutline