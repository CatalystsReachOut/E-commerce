import React from 'react'

const ButtonGradient = ({className,onClick,title}) => {
    return (
        <button onClick={onClick} className={`text-Medium+/Label/Large-Strong py-[16px] px-[24px] grad-btn highlighted-color text-Neutral10 w-[fit-content] rounded-[8px] ${className}`}>
            {title}
        </button>
    )
}

export default ButtonGradient