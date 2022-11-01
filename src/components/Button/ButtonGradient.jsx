import React from 'react'

const ButtonGradient = ({className,onClick,title}) => {
    return (
        <button onClick={onClick} className={`md:text-Medium+/Label/Large-Strong text-Medium+/Label/Medium-Strong md:py-[16px] md:px-[24px] py-[14px] px-[16px] grad-btn highlighted-color text-Neutral10 w-[fit-content] rounded-[8px] ${className}`}>
            {title}
        </button>
    )
}

export default ButtonGradient